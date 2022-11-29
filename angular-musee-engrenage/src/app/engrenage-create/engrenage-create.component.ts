import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Engrenage} from "../Class/engrenage";

@Component({
  selector: 'app-engrenage-create',
  templateUrl: './engrenage-create.component.html',
  styleUrls: ['./engrenage-create.component.scss']
})
export class EngrenageCreateComponent implements OnInit {

  result: string = '';

  submit (form: NgForm) {


    let engrenage = new Engrenage(
      form.value.nomEngrenage,
      form.value.avantage,
      form.value.inconvenient,
      form.value.image,
      form.value.Date,
      form.value.userName
    )


    console.log(engrenage)

    // ou
    // this.result = form.controls['username'].value;
  }

  ngOnInit() {
  }



}
