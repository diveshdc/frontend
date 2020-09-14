import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackDriverRoutingModule } from './track-driver-routing.module';
import { TrackDriverComponent } from './track-driver.component';


@NgModule({
  declarations: [TrackDriverComponent],
  imports: [
    CommonModule,
    TrackDriverRoutingModule
  ]
})
export class TrackDriverModule { }
