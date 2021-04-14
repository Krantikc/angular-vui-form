import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'AngularStarterProject';
  fDate: any;

  optionsText = {
    type: 'text'
  }

  optionsDate = {
    type: 'date'
  }

  optionsNumber = {
    type: 'number'
  }

  optionsAddress = {
    type: 'address'
  }
  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
   
  }

  onResponse(evt) {
  }

  
}
