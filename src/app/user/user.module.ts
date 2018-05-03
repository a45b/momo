import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserlistComponent
  ],
  declarations: [UserlistComponent]
})
export class UserModule { }
