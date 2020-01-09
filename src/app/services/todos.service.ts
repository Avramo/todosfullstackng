import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public baseAPI =  'http://localhost:3000/todos';

  private replaySubjectTodos:ReplaySubject<Todo[]> = new ReplaySubject<Todo[]>(1)
  public todosObs:Observable<Todo[]> = this.replaySubjectTodos.asObservable()

  constructor(private http:HttpClient) { 
    http.get(this.baseAPI)
      .subscribe(todosData => this.replaySubjectTodos.next(todosData as Todo[])) 
  }

  /// on 'completed' checkbox changed

  onCompletedChange(id:number, completed:boolean){
    return this.http.patch(this.baseAPI+'/'+ id, {"completed":completed})
    .pipe(tap( 
            () => {
              alert("hello")
              console.log("PATCH call successful value returned in body ");
            },//end tap log
            error => {
                console.error("PATCH call in error", error);
            },//end errr
            () => {
                console.log("PATCH in TODO id:" + id +",  COMPLETED:"+ completed);
            }//end obs completes
          )//end tap
    );//end pipe
  }

  getTodoById(id){
    return this.http.get(this.baseAPI+'/'+id)
    .pipe(tap(
            ()=> console.log('TodosService  getTodoById  pipe tap!!')
          )//end tap
    )//end pipe
  }

  // called from create form
  createNewTodo(newTodo){
    return this.http.post(this.baseAPI + '/' ,newTodo)
    .pipe(tap(
        ()=>{
          console.log("TodosService createNewTodo() started", newTodo);
        }
      )//end tap
    )//end pipe
  }

  //edit todo called from form
  editTodo(editTodo, id){
    return this.http.put(this.baseAPI + '/' + id , editTodo)
    .pipe(tap(
        ()=>{
          console.log("TodosService editTodo() started", editTodo);
        }
      )//end tap
    )//end pipe
  }

  deleteTodo(id){
    return this.http.delete(this.baseAPI + '/' + id)
    .pipe(tap(
        ()=>{
          console.log("TodosService deleteTodo() started todoI: ", id);
        }
      )//end tap
    )//end pipe
  }
 
}
