import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompletedTasksComponent} from './pages/completed-tasks/completed-tasks.component';
import {ActiveTasksComponent} from './pages/active-tasks/active-tasks.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'completed', component: CompletedTasksComponent },
  { path: 'active', component: ActiveTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
