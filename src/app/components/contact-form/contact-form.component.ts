import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() {
    this.form = this.createForm();
  }

  createForm() {
    const form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(''),
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
  }

  resetErrors() {
    this.forceValid = false;
    this.error = false;
    this.alertMessage = '';
  }

  hasError(controlName: string) {
    return (
      !this.form.get(controlName).valid &&
      (this.form.get(controlName).dirty || this.forceValid)
    );
  }

  ngOnInit() {}
}
