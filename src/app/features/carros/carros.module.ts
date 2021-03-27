import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentCarros } from './list/list.component';
import { ViewComponentCarros } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListComponentCarros, ViewComponentCarros],
  imports: [
    CommonModule, SharedModule],
  exports: [ViewComponentCarros, ListComponentCarros]
})
export class CarrosModule { }
