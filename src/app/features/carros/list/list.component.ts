import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-carros',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponentCarros implements OnInit {
  carros = [
    {

      modelo: 'Maserati MC20',
      marca: 'Maserati',
      ano: 2020,
      preco: '200.000 U$',
    },
    {

      modelo: 'Bentley Flying Spur Speed',
      marca: 'Bentley',
      ano: 2021,
      preco: '215.000 U$',
    },
    {

      modelo: 'Aston Martin Lagonda EV',
      marca: 'Rolls-Royce',
      ano: 2021,
      preco: '250.000 U$',
    },
    {

      modelo: 'Rolls Royce Ghost',
      marca: 'Rolls-Royce',
      ano: 2021,
      preco: '315.000 U$',
    },
    {

      modelo: 'Ferrari SF90 Stradale',
      marca: 'Ferrari',
      ano: 2021,
      preco: '550.000 U$',
    },
  ];


  colunasCarros = [

    {

      label: 'Imagem',

    },
    {

      label: 'Modelo',

    },
    {

      label: 'Marca',

    },
    {

      label: 'Ano De Fabricação',

    },
    {

      label: 'Preço',

    },
    {

      label: '',

    },
  ];


  constructor() {}

  ngOnInit(): void {}
}
