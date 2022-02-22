import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Component, HostListener, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { Observable } from 'windowed-observable';


@Component({
  selector: 'app-psm-deployment',
  templateUrl: './psm-deployment.component.html',
  styleUrls: ['./psm-deployment.component.scss']
})
export class PsmDeploymentComponent implements OnInit, OnDestroy {
  
  mfeDeploymentShell = (<any>window)['mf-satd'];
  serviceTag: string;
  deviceCount: any;
  deviceRegistered: any;
  updatedCurrStateHandler : any;
  selectedLanguage: string;
  observable = new Observable('update-container-state');

  constructor(private router: Router, private zone: NgZone, 
    private translateService: TranslateService) {

    console.log('PSM Deployemnt is called now ....');
    
    (<any>window)['mf-route'] = null;

    this.serviceTag =  this.mfeDeploymentShell?.serviceTag;
    this.deviceCount = this.mfeDeploymentShell?.psmDeployment.pcCount;
    this.deviceRegistered = this.mfeDeploymentShell?.psmDeployment.deviceRegistered;
    this.updatedCurrStateHandler = this.updateCurrentState.bind(this);
    this.selectedLanguage =  'en_US';
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit(): void {
    window.addEventListener('container-state-updated-event', this.updatedCurrStateHandler);
  }

  onBack(){
   this.router.navigateByUrl('satd');
  }

  onClick(){
    this.serviceTag = 'XXXDDD';
    this.observable.publish({
      serviceTag : 'XXXDDD'
    })

  }

  updateCurrentState(event: any){
    this.selectedLanguage = event.detail.locale;
  }

  ngOnDestroy(): void {
    this.observable.clear();
  }

}

