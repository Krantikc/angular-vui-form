import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VuiVoiceRecognitionService } from './vui-voice-recognition.service';
import VuiResponse from './vui-response';
import * as moment from 'moment/moment';

@Component({
  selector: 'vui-input',
  templateUrl: './vui-input.component.html',
  styleUrls: ['./vui-input.component.scss']
})
export class VuiInputComponent implements OnInit {

  recognition: any;
  transcript: string;
  selectedDate: Date;
  process: any;

  @Output()
  onValueChange: EventEmitter<any> = new EventEmitter();
  
  constructor(private vuiService: VuiVoiceRecognitionService, private ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.initVoiceRecognition();
    // this.recognition.start();
    const text = 'from 22nd August 2019';
    const dates = this.vuiService.interpretSpeech(text, 'date');

    

    // this.vuiService.response.next(new VuiResponse('', dates[0]));

    this.vuiService.response.subscribe((data) => {

      this.transcript = '';

      let currentRef = this.vuiService.currentRef;
      if (data.type == 'SWITCH_TO_NEXT') {
        currentRef = ++this.vuiService.currentRef;
      } else if (data.type == 'SWITCH_TO_PREVIOUS') {
        currentRef = --this.vuiService.currentRef;
      } else if (data.type == 'SWITCH_TO_FIRST') {
        currentRef = 0;
      } else if (data.type == 'SWITCH_TO_LAST') {
        currentRef = this.vuiService.inputRefs.length - 1;
      } else if (data.type == 'CLEAR') {
        this.vuiService.inputRefs[currentRef].nativeElement.value = '';
      } else {
        const currentInputObj = this.vuiService.inputRefs[currentRef];
        const currentEl = currentInputObj.nativeElement;
        const opts = currentInputObj['options'];

        if (data.value[0] instanceof Date) {
          currentEl.value = this.formatDate(data.value[0], opts && opts.format);
        } else {
          currentEl.value = data.value;
        }
        
        currentEl.dispatchEvent(new Event('input'));
        this.onValueChange.emit(data);
      }

      this.vuiService.inputRefs[currentRef].nativeElement.focus();

      this.setProcess('listening');

    });
    
  }

  setProcess(processType) {
    this.process = processType;
    this.ref.detectChanges();
  }

  formatDate(date: Date, format?: string) {
    return moment(date).format(format || 'DD/MM/YYYY');
  }

  initVoiceRecognition() {


      this.recognition = new window['webkitSpeechRecognition']();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      
    
      this.recognition.onstart = (event) => {
        this.setProcess('listening');
      }
      this.recognition.onresult = (event) => {

      const currentInputObj = this.vuiService.inputRefs[this.vuiService.currentRef];
      const opts = currentInputObj['options'];

        this.setProcess('parsing');
        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.transcript += event.results[i][0].transcript;
            this.vuiService.interpretSpeech(this.transcript, opts && opts.type)[0];
            let data: any = this.vuiService.interpretSpeech(this.transcript, opts && opts.type);
            let resp = new VuiResponse('date-range', data);
            if (typeof data == 'string') {
              resp = new VuiResponse(data, data.includes('_') ? '' : data);
            }
           
            this.vuiService.response.next(resp);
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
      }
      this.recognition.onerror = (event) => { 
        this.setProcess(null);
      }
      this.recognition.onend = (event) => { 
        const currentInputObj = this.vuiService.inputRefs[this.vuiService.currentRef];
        const opts = currentInputObj['options'];

        this.vuiService.interpretSpeech(this.transcript, opts && opts.type)[0];
        this.setProcess(null);
      }
  }

  startRecognition() {
    this.transcript = '';
    this.recognition.start();
  }

  stopRecognition() {
    this.transcript = '';
    this.recognition.stop();
    this.setProcess(null);
  }
}


Date.prototype['isValid'] = function () { 
               
  // If the date object is invalid it 
  // will return 'NaN' on getTime()   
  // and NaN is never equal to itself.   
  return this.getTime() === this.getTime(); 
}; 