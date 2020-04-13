import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaRestService } from './shared/services/camunda-rest.service';
import { ProcesslistComponent } from './processlist/processlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HomeComponent } from './home/home.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { GenericForm } from './generic-form.component';
import { ProcessModule } from './forms/process/process.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProcesslistComponent,
    TasklistComponent,
    HomeComponent,
    StartProcessComponent,
    GenericForm
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProcessModule,
    BrowserAnimationsModule,
    MyMaterialModule,
  ],
  providers: [CamundaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
