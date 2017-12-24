import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { STodoService } from '../services/s-todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  gettasks: Task[]=[];
  taskName: String;
  status: String;
  dueDate: Date;
  selected = '';
  tasks: Task[] =[];

  constructor(private todoService:STodoService) { }

  createTask(){
   let  ntask: Task={
    name: this.taskName,
    DueDate: this.dueDate,
    status: this.selected,
     };
    this.tasks.push(ntask);
    
    this.todoService.createNewTask(ntask).subscribe(
      data => {
        console.log(this.getTasks());
        console.log("Task Added");
      }
    )
    this.taskName=this.status='';
  }
getTasks(){
  this.todoService.getTodos().subscribe(todos => this.gettasks=todos);
  
}
deleteTask(){
  console.log("Delete Task");
this.todoService.deleteTasks().subscribe( tasks =>{
  console.log(tasks)
});

}
updateTask(){}

  ngOnInit() { this.getTasks()}

}
