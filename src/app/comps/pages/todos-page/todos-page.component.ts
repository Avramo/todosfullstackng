import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  
  constructor(private tdSVC:TodosService) { }

  ngOnInit() {
  }

}
