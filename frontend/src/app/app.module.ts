import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
