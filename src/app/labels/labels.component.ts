import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { STodoService } from '../services/s-todo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  gettasksByLabel: Task[]=[];
  constructor( private todoService: STodoService,
               private route: ActivatedRoute) { }

  getTasksByLabel(Label: String){
    this.todoService.getTodosByLabels(Label).subscribe(todos =>{ this.gettasksByLabel=todos;  });

  }
  ngOnInit() {
    const label = this.route.snapshot.paramMap.get('label');
    this.getTasksByLabel(label);
  }

}
