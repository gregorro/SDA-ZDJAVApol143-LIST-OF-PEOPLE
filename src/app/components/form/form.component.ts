import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

export enum Gender {
  Male,
  Female,
  Other
}

export interface UserData {
  name: string;
  surname: string;
  gender: Gender;
  street: string;
  number: string;
  city: string;
  phoneNumber: string;
  email: string
  dateOfBirth: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() emitNewUserData = new EventEmitter<UserData>()

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
    ]),
    dateOfBirth: new FormControl<string>('', [
      Validators.required,
    ])
  })

  onSubmit(){
    const {valid, value} = this.form

    if(valid){
      const userData: UserData = value as UserData;
      this.emitNewUserData.emit(userData)
      this.form.reset()
    } else {
      alert('Niepoprawnie wypełniony formularz!')
    }

  }

}
