import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaRestService } from './shared/services/camunda-rest.service';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HomeComponent } from './home/home.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { GenericForm } from './generic-form.component';
import { ProcessModule } from './forms/process/process.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { DocumentComponent } from './document/document.component';
import { UploadProcessComponent } from './upload-process/upload-process.component';
import { DiagramComponent } from './diagram/diagram.component';
import { ProcessDiagramComponent } from './process-diagram/process-diagram.component';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule,NgxUiLoaderHttpModule,NgxUiLoaderConfig    } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "fgsColor": "red",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 60,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center"
};

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskComponent,
    HomeComponent,
    StartProcessComponent,
    GenericForm,
    LoginComponent,
    UploadProcessComponent,
    DiagramComponent,
    ProcessDiagramComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProcessModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    CommonModule
  ],
  providers: [CamundaRestService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [DocumentComponent, UploadProcessComponent, ProcessDiagramComponent]
})
export class AppModule { }
