import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  todo:Todo = {todoID:null, userID: null, title:null, body:null, created:null, completed:false };
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
    let privateTODO:Todo = {...this.todo}//testtttttttttttttttttttttttttttttt
    privateTODO.created += "T00:00:00.000Z";
    console.log('AddTodoFormComponent ', "submitTodo() ",this.formMode);
    console.log("todo = ",this.todo);
    if (this.formMode == 'Create') {
      // this.todo.created =  new Date;
      this.todosSVC.createNewTodo(privateTODO)//this.todo
        .subscribe(
          (response) => {
           console.log("AddTodoFormComponent submitTodo() created new todo -> ",response);
          },
          (error)=>{
            console.error('submitTodo() createNewTodo() failed ' , error);
            
          }
        )//end subscribe
    }
    else{ //is an edit / PUT request
      // this.todosSVC.editTodo(this.todo, this.todo.todoID)
      confirm("Are you sure you want to edit this todo?");
      this.todosSVC.editTodo(privateTODO, privateTODO.todoID)
        .subscribe(
          (response) => {
           console.log("AddTodoFormComponent submitTodo() editTodo() edited todo -> ",response);
              //clears all form field  and therefor also this.todo via ngModel.
              document.querySelector('form').reset();
          },
          (error)=>{
            console.error('submitTodo() editTodo() failed ' , error)
            alert('ERROR! edit failed: ' + error) 
          }
        )//end subscribe
    }

    
    
  }

}
