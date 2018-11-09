import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  error: boolean;
  success: boolean;
  form: FormGroup;
  alertMessage: string;
  forceValid: boolean;

  constructor(private http: HttpClient) {
    this.form = this.createForm();
  }

  createForm() {
    const form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(''),
      'form-name': new FormControl(''),
    });

    return form;
  }

  submitForm() {
    this.resetErrors();

    if (!this.form.valid) {
      this.forceValid = true;
      this.error = true;
      this.alertMessage =
        'Prosze uzupełnić wymagane pola i spróbować ponownie.';
      return;
    }

    const body = new HttpParams()
      .set('form-name', '"contact"')
      .append('name', this.form.value.name)
      .append('phone', this.form.value.phone)
      .append('email', this.form.value.email)
      .append('message', this.form.value.message);

    this.http
      .post('/', body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'upgrade-insecure-requests': '1',
        },
      })
      .subscribe((res) => {
        this.form.reset();
        this.success = true;
      });
  }

  resetErrors() {
    this.forceValid = false;
    this.error = false;
    this.alertMessage = '';
    this.success = false;
  }

  hasError(controlName: string) {
    return (
      !this.form.get(controlName).valid &&
      (this.form.get(controlName).dirty || this.forceValid)
    );
  }

  ngOnInit() {}
}
