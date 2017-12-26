import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { LabelsComponent } from '../labels/labels.component';

const routes : Routes = [
  {path: 'todos', component:TaskComponent},
  {path: 'labels', component : LabelsComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'todos/:label', component: LabelsComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
