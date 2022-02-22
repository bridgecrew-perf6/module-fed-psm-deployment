import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PsmDeploymentComponent } from './psm-deployment.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [  
  { path: '', component: PsmDeploymentComponent },
  { path: '**', component: HomeComponent }  
 ];  

@NgModule({
  declarations: [PsmDeploymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PsmDeploymentModule { }
