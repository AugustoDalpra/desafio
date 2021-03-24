import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosModule } from './carros/carros.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarrosModule
  ],
  exports: [CarrosModule]
})
export class FeaturesModule { }
