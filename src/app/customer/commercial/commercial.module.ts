import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialComponent } from './commercial.component';


@NgModule({
  declarations: [CommercialComponent],
  imports: [
    CommonModule,
    CommercialRoutingModule
  ]
})
export class CommercialModule { }
