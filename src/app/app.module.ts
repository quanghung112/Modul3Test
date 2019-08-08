import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import {FormArray, FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DeleteComponent,
    CreateComponent,
    DetailComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
