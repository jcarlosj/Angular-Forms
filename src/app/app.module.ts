import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdFormComponent } from './components/forms/td-form/td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RFormComponent } from './components/forms/r-form/r-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    RFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
