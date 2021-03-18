import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'AngularStarterProject';
  fDate: any;

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
   
  }

  onResponse(evt) {
    console.log(evt)
    // this.ref.detectChanges();
  }

  
}
