import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor/visitor.component';
import { CreateComponent } from './visitors/create/create.component';
import { EditComponent } from './visitors/edit/edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: '',
    component: VisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
