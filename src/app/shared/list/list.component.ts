
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

idDiv: string;
keys = []

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.entities[0]);
    this.idDiv = `entity-${this.entityName}`;
  }


}
