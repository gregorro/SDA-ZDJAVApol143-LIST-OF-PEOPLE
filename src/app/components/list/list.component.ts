import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gender, UserData } from '../form/form.component';
import dayjs, { type Dayjs } from 'dayjs';
import { FormsModule } from '@angular/forms';

const ADULT_YEARS_NUMBER = 18

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output() removeUser = new EventEmitter<UserData>()

  @Input() data: readonly UserData[] = []

  searchValue: string = ''

  genderEnum: typeof Gender = Gender

  isAdult(dateOfBirth: string): boolean {
    const currentDate: Dayjs = dayjs()
    const dateOfBirthAsDayJs: Dayjs = dayjs(dateOfBirth)

    const diff: number = currentDate.diff(dateOfBirthAsDayJs, 'years');

    return diff >= ADULT_YEARS_NUMBER
  }

  renderTest(user: UserData): boolean {
    for (let key in user) {
      const testValue: boolean = new RegExp(`${this.searchValue.toLowerCase()}`).test((user[key as keyof UserData]).toString().toLowerCase())
      if (testValue)
        return true
    }
    return false
  }


}
