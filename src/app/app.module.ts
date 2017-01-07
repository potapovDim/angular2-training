import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './index';
import { Main } from './containers/index';

@NgModule({
  declarations: [
    AppComponent,
    Main],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
