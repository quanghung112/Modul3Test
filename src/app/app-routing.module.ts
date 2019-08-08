import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DeleteComponent} from './delete/delete.component';
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';
import {UpdateComponent} from './update/update.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'create', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
