import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { LoopDirective } from './loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    LoopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
