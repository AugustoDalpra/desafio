
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() carros: [];
@Input() entityName: string;
@Input() entities: any[];
@Input() columns: { label: string; style: any }[];
@Input() imagens: string;
idDiv: string;
keys = []
 idCompra: any;

carroEscolhido= [];

 constructor() { }

 ngOnInit(): void {
    this.keys = Object.keys(this.entities[0]);
    this.idDiv = `entity-${this.entityName}`;
  }



  adicionarCompra(index){

    this.carroEscolhido.splice(0);

    alert("Carro adicionado com sucesso");

this.idCompra = index;

this.carroEscolhido.push(this.carros[this.idCompra])

  }


}
