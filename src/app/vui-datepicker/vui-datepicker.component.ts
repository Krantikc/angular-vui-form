import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VuiVoiceRecognitionService } from '@app/vui-input/vui-voice-recognition.service';
import { Subject } from 'rxjs';
import * as moment from 'moment/moment';

/**
 * Possible values for type are:
 * 'daterange', 'date', 'text', 'number', 'numberrange', 
 * 'next-tab', 'submit'
 */
export class Response {
  type: string; 
  value: any;

  constructor(type?: string, value?: any) {
    this.type = type;
    this.value = value;
  }
}
@Component({
  selector: 'vui-datepicker',
  templateUrl: './vui-datepicker.component.html',
  styleUrls: ['./vui-datepicker.component.css']
})
export class VuiDatepickerComponent implements OnInit {

  /**
   * The form group, which utilises VUIModule.
   * Each form elements are interlinked and are accessed through response type
   * e.g, On successful voice interpretation of the speech 'Next tab', the response type 
   * is returned as 'next-tab' which will internally trigger element focus event to the next element.
   */
  @Input()
  form: FormGroup;

  @Output()
  response: Subject<Response> = new Subject<Response>();

  @ViewChild('createdDate', { static : false })
  createdDate: ElementRef;

  recognition: any;
  transcript: string;
  selectedDate: Date;

  constructor(private vuiService: VuiVoiceRecognitionService) { }

  ngOnInit() {

    this.initVoiceRecognition();

    this.vuiService.response.subscribe((data) => {

      if (data.type == 'SWITCH_TO_NEXT') {

      }
      const currentEl = this.vuiService.inputRefs[0].nativeElement;
      currentEl.value = this.formatDate(data.value[0]);
      currentEl.dispatchEvent(new Event('input'));
    });
    
  }

  formatDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
  }

  initVoiceRecognition() {


      this.recognition = new window['webkitSpeechRecognition']();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
    
      this.recognition.onresult = (event) => { 
        
        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.transcript += event.results[i][0].transcript;
            this.vuiService.interpretSpeech(this.transcript, 'date')[0];
            let dateRange = this.vuiService.interpretSpeech(this.transcript, 'date');
            const resp = new Response('date-range', dateRange);
            this.response.next(resp);
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }

      }
 
       this.recognition.onend = (event) => {
        this.vuiService.interpretSpeech(this.transcript, 'date')[0];
       }
  }

  startRecognition() {
    this.transcript = '';
    this.recognition.start();
  }

}
