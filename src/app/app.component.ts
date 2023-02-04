import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agnys Constructions';
   
  constructor(private bnIdle: BnNgIdleService) {
 
  }
 
  // initiate it in your component OnInit
  ngOnInit(): void {
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
      }
    });
  }
}
