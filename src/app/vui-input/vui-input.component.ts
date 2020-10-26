import { Component, OnInit } from '@angular/core';
import { VuiVoiceRecognitionService } from './vui-voice-recognition.service';
import VuiResponse from './vui-response';
import * as moment from 'moment/moment';

@Component({
  selector: 'vui-input',
  templateUrl: './vui-input.component.html',
  styleUrls: ['./vui-input.component.css']
})
export class VuiInputComponent implements OnInit {

  recognition: any;
  transcript: string;
  selectedDate: Date;

  constructor(private vuiService: VuiVoiceRecognitionService) { }

  ngOnInit() {

    this.initVoiceRecognition();
    // this.recognition.start();
    const text = 'from 22nd August 2019';
    const dates = this.vuiService.interpretSpeech(text);

    

    // this.vuiService.response.next(new VuiResponse('', dates[0]));

    this.vuiService.response.subscribe((data) => {
      

      if (data.type == 'SWITCH_TO_NEXT') {
        this.vuiService.currentRef++;
        const currentRef = this.vuiService.currentRef;
        this.vuiService.inputRefs[currentRef].nativeElement.focus();
      } else if (data.type == 'SWITCH_TO_PREVIOUS') {
        this.vuiService.currentRef--;
        const currentRef = this.vuiService.currentRef;
        this.vuiService.inputRefs[currentRef].nativeElement.focus();
      } else {
        const currentRef = this.vuiService.currentRef;
        const currentEl = this.vuiService.inputRefs[currentRef].nativeElement;

        if (data.value[0] instanceof Date) {
          currentEl.value = this.formatDate(data.value[0]);
        } else {
          currentEl.value = data.value;
        }
        
        currentEl.dispatchEvent(new Event('input'));
      }

    });
    
  }

  formatDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
  }

  initVoiceRecognition() {


      this.recognition = new window['webkitSpeechRecognition']();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
    
      this.recognition.onstart = function(event) {
        console.log(event)
      }
      this.recognition.onresult = (event) => { 
        
        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.transcript += event.results[i][0].transcript;
            this.vuiService.interpretSpeech(this.transcript)[0];
            let data: any = this.vuiService.interpretSpeech(this.transcript);
            let resp = new VuiResponse('date-range', data);
            if (typeof data == 'string') {
              resp = new VuiResponse(data, data);
            }
           
            this.vuiService.response.next(resp);
          } else {
            interim_transcript += event.results[i][0].transcript;
            console.log(interim_transcript)

          }
        }

      }
      this.recognition.onerror = (event) => { 
        console.log(event)
       }
       this.recognition.onend = (event) => { 
        console.log(event)
        this.vuiService.interpretSpeech(this.transcript)[0];
       }
  }

  startRecognition() {
    this.transcript = '';
    this.recognition.start();
  }
}
