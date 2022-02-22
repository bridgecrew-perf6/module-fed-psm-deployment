import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'psm-deployment';

  /**
   *
   */
  constructor() {
    console.log('PSM APP Deployment is called now ....');
    
  }

}
