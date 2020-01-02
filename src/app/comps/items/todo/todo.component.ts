import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() td:Todo;
  
  constructor(private tdSVC:TodosService, private http:HttpClient) { }

  onCompletedChange(event){
    this.http.patch(this.tdSVC.baseAPI+'/'+this.td.todoID, {"completed":event.checked})
    .subscribe(
      (val) => {
          console.log("PATCH call successful value returned in body", 
                      val);
      },
      response => {
          console.log("PATCH call in error", response);
      },
      () => {
          console.log("The PATCH observable is now completed.");
    });
  }

  ngOnInit() {
  }



}
