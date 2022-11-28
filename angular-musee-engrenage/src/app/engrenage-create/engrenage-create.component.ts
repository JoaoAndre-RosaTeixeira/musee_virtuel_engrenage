import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-engrenage-create',
  templateUrl: './engrenage-create.component.html',
  styleUrls: ['./engrenage-create.component.scss']
})
export class EngrenageCreateComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null],
    });
  }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file,
    });
    this.form.get('avatar').updateValueAndValidity();
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('avatar', this.form.get('avatar').value);
    this.http
      .post('http://localhost:4000/api/create-user', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }

  // this.http.post<any>('https://reqres.in/invalid-url', { title: 'Angular POST Request Example' }).subscribe({
  //   next: data => {
  //     this.postId = data.id;
  //   },
  //   error: error => {
  //     this.errorMessage = error.message;
  //     console.error('There was an error!', error);
  //   }
  // })


}
