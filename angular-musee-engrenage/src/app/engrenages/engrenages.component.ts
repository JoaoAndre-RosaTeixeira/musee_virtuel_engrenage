import { Component, OnInit } from '@angular/core';
import {range} from "rxjs";
import {Engrenage} from "../Class/engrenage";
import {HttpClientService} from "../../services/http-client.service";
import {EngrenageAPI} from "../Interface/engrenageAPI";
import {IEngrenage} from "../Interface/IEngrenage";

@Component({
  selector: 'app-engrenages',
  templateUrl: './engrenages.component.html',
  styleUrls: ['./engrenages.component.scss']
})
export class EngrenagesComponent implements OnInit {
  get engrenagesListres(): Array<IEngrenage> | undefined {
    console.log(this._engrenagesList)
    return this._engrenagesList;
  }

  private _engrenagesList: Array<IEngrenage> = []


  constructor(
    private httpService: HttpClientService
  ) {
    // for (let i = 0; i < 10; i++) {
    //   this._engrenagesList.push(new Engrenage(i, i.toString(), i.toString(), [i.toString()], [i.toString()], i.toString(), i.toString() ))
    // }
  }
  ngOnInit(): void {
    this.httpService.getRequest<Array<IEngrenage>>("http://127.0.0.1:5000/api/getEngrenages").subscribe((json) => {
      this._engrenagesList = json;
    });



  }

}
