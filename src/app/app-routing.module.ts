import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosPageComponent } from './comps/pages/todos-page/todos-page.component';


const routes: Routes = [
  {path:'todos', component: TodosPageComponent},
  
  {path:'' , redirectTo:'/todos', pathMatch:'full'},
  {path:'**' , redirectTo:'/todos', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
