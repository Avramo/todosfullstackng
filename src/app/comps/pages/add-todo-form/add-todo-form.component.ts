import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  todo:Todo = {todoID:null, userID: null, title:null, body:null, created:null, completed:false };
  newTODO = {userID: null, title:null, body:null, created:null, completed:false };
  formMode:string = "Create";

  // todoID:number = null;
  // userID:number = null;
  // title:string = null;
  // body:string = null;
  // created:Date = null;

  constructor(private todosSVC:TodosService) {}

  ngOnInit() {
  }

  formModeChange(mode){
    this.formMode = mode;
    document.querySelector('form').reset();
  }

  getinfoById(id){
    if (id) {
      this.todosSVC.getTodoById(id).subscribe(
        (resultTodo:Todo)=>{
          this.todo = resultTodo;
         console.log(this.todo);
        }
        
      )
    }

  }

  submitTodo(){
    alert(this.todo.created)
    this.todo.created =  new Date;
    alert(this.todo.created)

    console.log('AddTodoFormComponent ', "submitTodo() ",this.formMode);
    console.log(this.todo);
    if (this.formMode == 'Create') {
      // this.newTODO = this.todo;
      this.todosSVC.createNewTodo(this.todo)
        .subscribe(
          (response) => {
           console.log("AddTodoFormComponent submitTodo() created new todo -> ",response);
          },
          (error)=>{
            console.error('submitTodo() createNewTodo() failed ' , error);
            
          }
        )//end subscribe
    }
    
    
    
  }

}
