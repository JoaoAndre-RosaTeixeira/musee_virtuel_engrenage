import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClientService} from "../../services/http-client.service";
import {IEngrenage} from "../Interface/IEngrenage";

@Component({
  selector: 'app-engrenage-info',
  templateUrl: './engrenage-info.component.html',
  styleUrls: ['./engrenage-info.component.scss']
})
export class EngrenageInfoComponent implements OnInit {



  constructor(
    private _activatedRoute: ActivatedRoute,
    private httpService: HttpClientService) {
    this.httpService.getRequest
  }
  private _engrenage: IEngrenage | undefined
  get engrenage(): IEngrenage {
    return <IEngrenage>this._engrenage;
  }

  set engrenage(value: IEngrenage) {
    this._engrenage = value;
  }

  apiLoad() {
    this._activatedRoute.params.subscribe((params) => {
      this.httpService.getRequest<IEngrenage>("http://127.0.0.1:5000/api/getEngrenages/"+params['slug']).subscribe((json) => {
        this.engrenage = json
        console.log(this.engrenage.id)
      });
    })


  }

  ngOnInit(): void {
    this.apiLoad()
  }


  get engrenageAvantages(): Array<string> {
    return this.engrenage.avantage.split(",");
  }
  get engrenageInconvenients(): Array<string> {
    return this.engrenage.avantage.split(",");
  }


}
