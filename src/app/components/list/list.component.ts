import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gender } from '../form/form.component';

interface BaseUserData {
  name: string;
  surname: string;
  gender: Gender
}

const mockData: BaseUserData[] = [
  {
    name: 'Aleksandra',
    surname: 'Olejniczak',
    gender: Gender.Female
  },
  {
    name: "Krystian",
    surname: 'Kowalski',
    gender: Gender.Male
  }
]


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  genderEnum: typeof Gender = Gender

  isReadyToRender: boolean = false;
  userData: BaseUserData[] = mockData
  value: number = 5
}
