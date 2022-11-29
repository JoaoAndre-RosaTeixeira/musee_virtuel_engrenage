import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  private _textAccueil: any

  get textAccueil(): any {
    return this._textAccueil;
  }

  set textAccueil(value: any) {
    this._textAccueil = value;
  }

  constructor(private httpService: HttpClientService) {
    this.httpService.getRequest
  }

  apiLoad() {
    this.httpService.getRequest("http://127.0.0.1:5000/api/wikiEngrenages").subscribe((json) => {
      this._textAccueil = json
      });



  }

  ngOnInit(): void {
    this.apiLoad()
  }

}
