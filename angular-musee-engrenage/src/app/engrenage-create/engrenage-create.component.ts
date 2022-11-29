import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Engrenage} from "../Class/engrenage";
import {IEngrenage} from "../Interface/IEngrenage";
import {HttpClientService} from "../../services/http-client.service";

@Component({
  selector: 'app-engrenage-create',
  templateUrl: './engrenage-create.component.html',
  styleUrls: ['./engrenage-create.component.scss']
})
export class EngrenageCreateComponent implements OnInit {

  result: string = '';

  constructor(
    private http: HttpClient
  ) {}

  submit (form: NgForm) {
    let date: Date = new Date()
    let dateStr: string = date.toISOString().split('T')[0];
    let engrenageJson
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

  ngOnInit() {
  }



}
