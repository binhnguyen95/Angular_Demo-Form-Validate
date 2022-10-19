import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactFormComponent } from './react-form/react-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
