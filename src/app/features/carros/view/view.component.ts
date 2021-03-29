import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-carros',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})




export class ViewComponentCarros implements OnInit {

  @Input() idCompra;

  @Input() colunasCarro=[];

  @Input() entities: any[];

  keys = [];

@Input() carroEscolhido = [];




  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.entities[0]);
  }





}
