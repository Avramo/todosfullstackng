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

  constructor(private todosSVC:TodosService, private http:HttpClient) { }


  completedChanged(completed:boolean){
    // this.todosSVC.onCompletedChange(event, this.td)
    this.todosSVC.onCompletedChange(this.todo.todoID, completed).subscribe(
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

  removeTodo(todoID){
    let conf = confirm("Are you sure you want to DELETE this todo? \n This CAN'T be undone!")
    if (conf == true) {
      this.todosSVC.deleteTodo(todoID).subscribe(
        (result) => {
          console.log("TodoComponent removeTodo() removed = ", result);
        },
        (error)=>{
          console.error('TodoComponent removeTodo() failed ' , error);
        },
      )
      
      window.location.reload()
    }
    
  }


  ngOnInit() {
  }


}
