import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Engrenage} from "../Class/engrenage";
import {IEngrenage} from "../Interface/IEngrenage";
import {ActivatedRoute} from "@angular/router";
import {HttpClientService} from "../../services/http-client.service";

@Component({
  selector: 'app-engrenage-update',
  templateUrl: './engrenage-update.component.html',
  styleUrls: ['./engrenage-update.component.scss']
})
export class EngrenageUpdateComponent implements OnInit {

  result: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private httpService: HttpClientService,
    private http: HttpClient
  ) {
    this.httpService.getRequest
  }

  submit (form: NgForm) {
    let date: Date = new Date()
    let dateStr: string = date.toISOString().split('T')[0];
    let engrenage = new Engrenage(
      form.value.nomEngrenage,
      form.value.avantage,
      form.value.inconvenient,
      form.value.image,
      dateStr,
      form.value.userName
    )

    console.log(engrenage)

    let request =
      this.http.post(`http://127.0.0.1:5000/api/createEngrenage`,
        {
          "nomEngrenage" : engrenage.nomEngrenage,
          "avantage" : engrenage.avantage,
          "inconvenient" : engrenage.inconvenient,
          "image" : engrenage.image,
          "Date" : engrenage.Date,
          "userName" : engrenage.userName
        })

    request.subscribe((data) => {
      console.log(data); })
    // ou
    // this.result = form.controls['username'].value;
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
      this.httpService.getRequest<IEngrenage>("http://127.0.0.1:5000/api/updateEngrenages/"+params['slug']).subscribe((json) => {
        this.engrenage = json
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
