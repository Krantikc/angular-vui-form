import { ApplicationRef, ChangeDetectorRef, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { VuiVoiceRecognitionService } from './vui-voice-recognition.service';
import * as moment from 'moment/moment';

const DEFAULT_OPTS = {
  type: 'date',
  dateFormat: 'DD/MM/YYYY'
}

@Directive({
  selector: '[vuiInput]'
})
export class VuiInputDirective implements OnInit {

  @Input('vuiInput')
  options: any;


  constructor(private vuiService: VuiVoiceRecognitionService, 
              private el: ElementRef) { 
    this.el.nativeElement.setAttribute('vui-ref', this.vuiService.inputRefs.length);
    this.vuiService.inputRefs.push(this.el);

    this.el.nativeElement.addEventListener('focus', (evt) => {
      this.vuiService.currentRef = parseInt(evt.target.getAttribute('vui-ref'));
    })
   
  }
  ngOnInit(): void {
    this.options = this.options || DEFAULT_OPTS;

    // this.storeAllInputs();

    // this.vuiService.response.subscribe((data) => {

    //   if (data.type == 'SWITCH_TO_NEXT') {

    //   }
    //   console.log(this.el);
    //   this.el.nativeElement.value = this.formatDate(data.value[0]);
    //   this.el.nativeElement.dispatchEvent(new Event('input'));
    // });
  }

  storeAllInputs() {
    let elms = document.querySelectorAll('[vuiInput]');
    console.log(elms);
  }

  formatDate(date: Date) {
    return moment(date).format(this.options.dateFormat);
  }

}
