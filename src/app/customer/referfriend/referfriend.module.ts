import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferfriendRoutingModule } from './referfriend-routing.module';
import { ReferfriendComponent } from './referfriend.component';


@NgModule({
  declarations: [ReferfriendComponent],
  imports: [
    CommonModule,
    ReferfriendRoutingModule
  ]
})
export class ReferfriendModule { }
