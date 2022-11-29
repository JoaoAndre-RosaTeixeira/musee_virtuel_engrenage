import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Engrenage} from "../Class/engrenage";

@Component({
  selector: 'app-engrenage-update',
  templateUrl: './engrenage-update.component.html',
  styleUrls: ['./engrenage-update.component.scss']
})
export class EngrenageUpdateComponent implements OnInit {

  result: string = '';

  constructor(
    private http: HttpClient
  ) {}

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

  ngOnInit() {
  }



}
