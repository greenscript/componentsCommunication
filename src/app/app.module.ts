import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppColorComponent } from './components/app-color/appColor.component';
import { AppColorsComponent } from './components/app-colors/appColors.component';


@NgModule({
  declarations: [
    AppComponent,
    AppColorComponent,
    AppColorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
