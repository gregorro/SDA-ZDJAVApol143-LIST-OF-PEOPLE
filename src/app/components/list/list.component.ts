import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gender, UserData } from '../form/form.component';
import dayjs, {type Dayjs} from 'dayjs';
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

  @Input() data: UserData[] = []

  searchValue: string = ''

  genderEnum: typeof Gender = Gender

  isAdult(dateOfBirth: string): boolean {
    const currentDate: Dayjs = dayjs()
    const dateOfBirthAsDayJs: Dayjs = dayjs(dateOfBirth)

    const diff: number = currentDate.diff(dateOfBirthAsDayJs, 'years');

    return diff >= ADULT_YEARS_NUMBER
  }

  renderTest(name: string): boolean{
    return new RegExp(`${this.searchValue.toLowerCase()}`).test(name.toLowerCase())
  }

}
