import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonModule,
  MatProgressBarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { AccessLogService } from './access-log/access-log.service';
import { PackagistComponent } from './packagist/packagist.component';
import { PackagistService } from './packagist/packagist.service';

@NgModule({
  declarations: [
    AppComponent,
    AccessLogComponent,
    PackagistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  exports: [
  ],
  providers: [
    AccessLogService,
    PackagistService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
