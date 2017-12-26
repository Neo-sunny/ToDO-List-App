import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import { Task } from '../shared/task';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class STodoService {

  constructor(private http: Http) { }

  public extractData(res: Response){
    let body = res.json();

    return body || { };
  }

  getTodosByLabels(label:String):Observable<Task[]>{
    return this.http.get('http://localhost:3000/todos/labels/'+label)
    .map(res => { return res.json(); })
    .catch( (error:any) => {
        return Observable.throw(error.json ? error.json().error : error || 'Server error')
    }  )
  }
  getTodos(): Observable<Task[]>{
    return  this.http.get('http://localhost:3000/todos')
                      .map(res => { return res.json();  })
                      .catch((error:any) => {
                        return Observable.throw(error.json ? error.json().error : error || 'Server error')
      }); 

  }
  
  createNewTask(task:Task): Observable<any>{
  return this.http.post("http://localhost:3000/todos", task)
      .map((res:any) => {
          return res.json();
      })
      .catch((error:any) => {
          return Observable.throw(error.json ? error.json().error : error || 'Server error')
      }); 
}

    deleteTasks(){
        return this.http.delete("http://localhost:3000/todos" )
        .map((res:any) => {
            return res.json();
        })
        .catch((error:any) => {
            return Observable.throw(error.json ? error.json().error : error || 'Server error')
        });
    }

    deleteTask(name:String){
        return this.http.delete("http://localhost:3000/todos/" + name )
        .map((res:any) => {
            return res.json();
        })
        .catch((error:any) => {
            return Observable.throw(error.json ? error.json().error : error || 'Server error')
        });
    }
    
}
