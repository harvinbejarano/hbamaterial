import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { MycardComponent } from './mycard/mycard.component';
import { MyLayoutRoutingModule } from './my-layout-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [MycardComponent],
  imports: [
    CommonModule,
    MyLayoutRoutingModule,
    MaterialModule
  ]
})
export class MyLayoutModule { }
