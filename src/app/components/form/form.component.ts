import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

export enum Gender {
  Male,
  Female,
  Other
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  genderEnum: typeof Gender = Gender

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required
    ]),
    surname: new FormControl<string>('', [
      Validators.required
    ]),
    gender: new FormControl<Gender | null>(null, [
      Validators.required
    ]),
    street: new FormControl<string>('', [
      Validators.required
    ]),
    number: new FormControl<string>('', [
      Validators.required
    ]),
    city: new FormControl<string>('', [
      Validators.required
    ]),
    phoneNumber: new FormControl<string>('', [
      Validators.required
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ])
  })

  onSubmit(){
    const {errors, valid, value} = this.form

    console.log(`Czy formularz jest zwalidowany? - ${valid ? 'Tak' : 'Nie'}`)
    console.log(`Globalne errory:`, errors)
    console.log(`Wartości:`, value)
  }

}
