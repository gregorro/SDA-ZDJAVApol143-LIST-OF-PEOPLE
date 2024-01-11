import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { v4 } from 'uuid'

export enum Gender {
  Male,
  Female,
  Other
}

export interface UserData {
  uid: string;
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

  onSubmit() {
    const { valid, value } = this.form

    if (valid) {
      const userData: UserData = { ...value, uid: v4() } as UserData;
      this.emitNewUserData.emit(userData)
      this.form.reset()
    } else {
      alert('Niepoprawnie wypełniony formularz!')
    }

  }

  getErrorLabels(formControl: AbstractControl<any,any> | null): string {
    const errors: ValidationErrors | null = formControl?.errors || null
    if (!errors) {
      return ''
    }

    return Object.keys(errors).reduce<string[]>((collector: string[], errorKey: string) => {
      switch (errorKey) {
        case 'required':
          collector.push('This field is required!')
          break;
        case 'email':
          collector.push('This is not valid email!')
          break;
      }
      return collector;
    }, []).join('; ')
  }
}
