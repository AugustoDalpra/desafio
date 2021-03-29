import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosModule } from './carros/carros.module';
import { PaymentModule } from './pagamento/payment/payment.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarrosModule
  ],
  exports: [CarrosModule, PaymentModule]
})
export class FeaturesModule { }
