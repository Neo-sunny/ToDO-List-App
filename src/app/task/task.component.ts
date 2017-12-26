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
  label = '';
  constructor(private todoService:STodoService) { }

  createTask(){
   let  ntask: Task={
    name: this.taskName.trim(),
    DueDate: this.dueDate,
    status: this.selected,
    };
    
    this.todoService.createNewTask(ntask).subscribe(
      data => {
        this.getTasks();
        console.log("Task Added "+ data.name);
      }
    )
    this.taskName=this.status='';
  }
getTasks(){
  this.todoService.getTodos().subscribe(todos => this.gettasks=todos);
  
}
deleteTasks(){
  console.log("Delete Task");
  this.todoService.deleteTasks().subscribe( tasks =>{
    this.getTasks();
    console.log(tasks)
});

}
updateTask(){}
deleteTask(task:Task):void {
 
  this.todoService.deleteTask(task.name.trim()).subscribe( ()=>{this.getTasks();  console.log(task.name +' task deleted');}
  );  
}
  ngOnInit() { this.getTasks()}

}
