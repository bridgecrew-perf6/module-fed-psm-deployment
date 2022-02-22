import { MicrofrontendModule } from './microfrontend/microfrontend.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PsmDeploymentModule } from './psm-deployment/psm-deployment.module';

export function createTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http, `/mf/satd-deployment/i18n/`, '.json');
    // loading via container
    return new TranslateHttpLoader(http, `/i18n/`, '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PsmDeploymentModule,
    HttpClientModule,
    TranslateModule.forRoot()
    // .forRoot(
    // {
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: createTranslateLoader,
    //       deps: [HttpClient],
    //   },
    // }
    // )
  ],
  exports: [
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
