import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microfrontend',
  templateUrl: './microfrontend.component.html',
  styleUrls: ['./microfrontend.component.scss']
})
export class MicrofrontendComponent implements OnInit {

  serviceTag = 'XSDDFF';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  onDeploymentClick(){
    this.router.navigateByUrl('/psm-deployment');
  }

  onOverviewClick(){
    this.router.navigateByUrl('/psm-overview');
  }

  onInsightClick(){
    this.router.navigateByUrl('/psm-insight');
  }


}
