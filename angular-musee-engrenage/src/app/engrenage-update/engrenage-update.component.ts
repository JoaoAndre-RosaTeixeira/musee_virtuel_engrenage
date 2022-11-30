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
        console.log(this.engrenage)
      });
    })


  }
  get engrenageAvantages(): Array<string> {
    return this.engrenage.avantage.split(", ");
  }
  get engrenageInconvenients(): Array<string> {
    return this.engrenage.avantage.split(", ");
  }
  get engrenageNomEngrenage(): Array<string> {
    return this.engrenage.nomEngrenage.split(",");
  }
  get engrenageImage(): Array<string> {
    return this.engrenage.image.split(",");
  }
  get engrenageDate(): Array<string> {
    return this.engrenage.Date.split(",");
  }
  get engrenageUserName(): Array<string> {
    return this.engrenage.userName.split(",");
  }
  get engrenageId(): number {
    return this.engrenage.id;
  }

  ngOnInit(): void {
    this.apiLoad()
  }

  submit (form: NgForm) {
    let date: Date = new Date()
    let dateStr: string = date.toISOString().split('T')[0];
    let engrenageForm = new Engrenage(
      form.value.nomEngrenage,
      form.value.avantage,
      form.value.inconvenient,
      form.value.image,
      dateStr,
      form.value.userName
    )


    let request =
      this.http.post(`http://127.0.0.1:5000/api/updateEngrenage/`+this.engrenageId,
        {
          "id" : this.engrenageId,
          "nomEngrenage" : engrenageForm.nomEngrenage,
          "avantage" : engrenageForm.avantage,
          "inconvenient" : engrenageForm.inconvenient,
          "image" : engrenageForm.image,
          "Date" : engrenageForm.Date,
          "userName" : engrenageForm.userName
        })

    request.subscribe((data) => {
      console.log(data); })
    // ou
    // this.result = form.controls['username'].value;
  }



}
