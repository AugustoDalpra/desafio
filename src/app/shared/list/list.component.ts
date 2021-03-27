
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

@Input() entityName: string;
@Input() entities: any[];
@Input() columns: { label: string; style: any }[];
@Input() imagens: string;
idDiv: string;
keys = []
@Input() compra : any;

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.entities[0]);
    this.idDiv = `entity-${this.entityName}`;
  }


  adicionarCompra(index){

    this.compra = document.getElementById('itens');

  }





}
