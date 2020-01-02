import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { Todo } from '../models/todo';

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
}
