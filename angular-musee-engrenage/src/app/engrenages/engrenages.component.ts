import { Component, OnInit } from '@angular/core';
import {range} from "rxjs";
import {Engrenage} from "./Class/engrenage";

@Component({
  selector: 'app-engrenages',
  templateUrl: './engrenages.component.html',
  styleUrls: ['./engrenages.component.scss']
})
export class EngrenagesComponent implements OnInit {
  get engrenagesList(): Array<Engrenage> {
    return this._engrenagesList;
  }

  set engrenagesList(value: Array<Engrenage>) {
    this._engrenagesList = value;
  }

  private _engrenagesList: Array<Engrenage> = []


  constructor() {

    for (let i = 0; i < 10; i++) {
      this._engrenagesList.push(new Engrenage(i, i.toString(), i.toString(), [i.toString()], [i.toString()], i.toString(), i.toString() ))
    }


  }


  ngOnInit(): void {



  }

}
