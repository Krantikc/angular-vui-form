import { ApplicationRef, ChangeDetectorRef, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { VuiVoiceRecognitionService } from './vui-voice-recognition.service';
import * as moment from 'moment/moment';

const DEFAULT_OPTS = {
  type: 'date',
  format: 'DD/MM/YYYY'
}

class Options {
  type: string;
  format?: string;
}

@Directive({
  selector: '[vuiInput]'
})
export class VuiInputDirective implements OnInit {

  /**
   * Options for vui input field
   * type: 'text', 'address', 'date', 'number'
   * format: 'DD/MM/YYYY'
   */
  @Input('vuiInput')
  options: Options; 


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
    this.el['options'] = this.options;
  }

  storeAllInputs() {
    let elms = document.querySelectorAll('[vuiInput]');
  }

  formatDate(date: Date) {
    return moment(date).format(this.options.format);
  }

}
