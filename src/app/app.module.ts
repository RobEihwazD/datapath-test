import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@app/shared/shared.module';
import { ApiModule} from '@app/shared/api.module'
import { MaterialDesignModule } from '@app/shared/material-design.module';
import { ViewsModule } from '@app/views/views.module';
import { BASE_PATH } from './shared';
import {environment} from '@env/environment'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialDesignModule,
    ViewsModule,
    SharedModule,
    ApiModule
  ],
  providers: [
    {provide: BASE_PATH, useValue: environment.basePath}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
