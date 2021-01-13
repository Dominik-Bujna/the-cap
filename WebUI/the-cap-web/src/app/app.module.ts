import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { UploadboxComponent } from './uploadbox/uploadbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileUploadModule } from 'ng2-file-upload';
import { FormPageComponent } from './form-page/form-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    VideoPlayerComponent,
    UploadboxComponent,
    FormPageComponent
  ],
  imports: [
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
