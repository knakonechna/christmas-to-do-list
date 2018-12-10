import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './components/lists/lists.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { EditInputComponent } from './components/edit-input/edit-input.component';
import { ActiveTasksComponent } from './pages/active-tasks/active-tasks.component';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    HeaderComponent,
    EditInputComponent,
    ActiveTasksComponent,
    CompletedTasksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
