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

    console.log('AddTodoFormComponent ', "submitTodo() ",this.formMode);
    console.log(this.todo);
    if (this.formMode == 'Create') {
      this.todo.created =  new Date;
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
    else{
      this.todosSVC.editTodo(this.todo, this.todo.todoID)
        .subscribe(
          (response) => {
           console.log("AddTodoFormComponent submitTodo() editTodo() edited todo -> ",response);
          },
          (error)=>{
            console.error('submitTodo() editTodo() failed ' , error);
            
          }
        )//end subscribe
    }
    
    
    
  }

}
