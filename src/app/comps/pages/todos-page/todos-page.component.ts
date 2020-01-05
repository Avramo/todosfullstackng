import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  todosVisible:boolean = true;
  toggleView:string = 'Show Todos';
  
  constructor(private tdSVC:TodosService) { }

  toggleTodos(){
    this.todosVisible = ! this.todosVisible;
    if (this.todosVisible) {
      this.toggleView ='Hide Todos'
    }
    if (! this.todosVisible) {
      this.toggleView ='Show Todos'
    }
  }
  ngOnInit() {
  }

}
