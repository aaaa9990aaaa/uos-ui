import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DeepinUiModule} from 'deepin-ui'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DeepinUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
