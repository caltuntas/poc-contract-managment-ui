import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProcesslistComponent } from './processlist/processlist.component';
import { StartProcessComponent } from './start-process/start-process.component'
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [

      { path: 'processlist', component: ProcesslistComponent, canActivate: [AuthGuard] },
      { path: 'startprocess/:processdefinitionkey', component: StartProcessComponent, canActivate: [AuthGuard] },
      { path: 'tasklist', component: TasklistComponent, canActivate: [AuthGuard] },
      { path: 'tasks/:id/:processInstanceId', component: TaskComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
