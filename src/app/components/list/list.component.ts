import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gender, UserData } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input({
    required: true
  }) data: UserData[] = []

  date: Date = new Date()

  genderEnum: typeof Gender = Gender
}
