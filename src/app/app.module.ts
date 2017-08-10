import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdDatepickerModule,
  MdInputModule,
  MdNativeDateModule,
  MdSelectModule,
  MdButtonModule,
  MdProgressBarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PackagistComponent } from './packagist/packagist.component';
import { PackagistService } from './packagist/packagist.service';

@NgModule({
  declarations: [
    AppComponent,
    PackagistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdSelectModule,
    MdButtonModule,
    MdProgressBarModule,
  ],
  exports: [
  ],
  providers: [
    PackagistService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
