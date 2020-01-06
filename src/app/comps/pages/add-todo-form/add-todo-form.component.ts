import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  formMode:string = "Create";


  constructor(private todosSVC:TodosService) {
    
   }

  ngOnInit() {
  }


  
  getinfoById(id){
    this.todosSVC.getTodoById(id).subscribe(
      (resultTodo:Todo)=>{
      alert(resultTodo.title)

    }
    )

  }

  submitTodo(event){
    alert(event)
  }

}
