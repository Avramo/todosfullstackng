import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatModule } from './modules/material-module.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { TodosPageComponent } from './comps/pages/todos-page/todos-page.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { AddTodoFormComponent } from './comps/pages/add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodoComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatModule,
    BrowserAnimationsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
