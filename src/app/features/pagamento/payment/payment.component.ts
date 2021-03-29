
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

constructor( private location: Location) { }

ngOnInit(): void {

}

efetuarCompra(){


  alert('Compra enviada!! Vá até a agência do banco mais próximo para confirmar a compra com o gerente');

  this.refresh();

}



refresh(){

  location.reload();
}















}
