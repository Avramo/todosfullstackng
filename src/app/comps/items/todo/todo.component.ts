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

  @Input() todo:Todo;

  constructor(private tdSVC:TodosService, private http:HttpClient) { }


  completedChanged(completed:boolean){
    // this.tdSVC.onCompletedChange(event, this.td)
    this.tdSVC.onCompletedChange(this.todo.todoID, completed).subscribe(
      ()=>{
        console.log("TodoComponent completedChanged subscribe next done");

      },//next/subscribe
      err => {
        console.error("todo id:" +this.todo.todoID + ", PATCH error");
      },
      ()=>{
        console.log("todo id:" +this.todo.todoID + ", PATCH completed");
      }//end completed
    )
  }


  ngOnInit() {
  }


}
