import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentCarros } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ ViewComponentCarros, ],
  imports: [
    CommonModule, SharedModule],
  exports: [ViewComponentCarros, ]
})
export class CarrosModule { }
