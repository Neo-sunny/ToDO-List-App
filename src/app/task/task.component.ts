import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskStatus = [
    {value: 'starting', viewValue: 'Starting'},
    {value: 'inProgress', viewValue: 'In Progress'},
    {value: 'completed', viewValue: 'Completed'}
  ];
  taskName: String;
  status: String;
  dueDate: Date;
  tasks: Task[] =[];

  constructor() { }

  createTask(){
   let  ntask: Task={
    name: this.taskName,
    DueDate: this.dueDate,
    status: this.status
     };
    this.tasks.push(ntask);
    
  console.log(this.tasks[0].name);
  console.log(this.tasks);
    this.taskName=this.status='';
  }
  ngOnInit() {
  }

}
