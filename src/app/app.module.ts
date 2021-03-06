import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { EditInputComponent } from './edit-input/edit-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    HeaderComponent,
    EditInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
