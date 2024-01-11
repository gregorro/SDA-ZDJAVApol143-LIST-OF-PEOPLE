import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent, UserData } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { v4 } from 'uuid';

const mockData: UserData[] = [
  {
    uid: v4(),
    "name": "Adam",
    "surname": "Kikut",
    "gender": 0,
    "street": "Poznańska",
    "number": "13",
    "city": "Warszawa",
    "phoneNumber": "232314124",
    "email": "greg@gmail.com",
    "dateOfBirth": "2024-01-23"
  },
  {
    uid: v4(),
    "name": "Krystian",
    "surname": "Kikut",
    "gender": 0,
    "street": "Kowalska",
    "number": "34",
    "city": "Warszawa",
    "phoneNumber": "515789657",
    "email": "greg@gmail.com",
    "dateOfBirth": "2024-01-02"
  },
  {
    uid: v4(),
    "name": "Piotr",
    "surname": "Kikut",
    "gender": 2,
    "street": "Poznańska",
    "number": "13",
    "city": "Kraków",
    "phoneNumber": "515789657",
    "email": "greg@gmail.com",
    "dateOfBirth": "2024-01-22"
  },
  {
    uid: v4(),
    "name": "Piotr",
    "surname": "Kowalski",
    "gender": 2,
    "street": "Poznańska",
    "number": "13",
    "city": "Kraków",
    "phoneNumber": "515789657",
    "email": "greg@gmail.com",
    "dateOfBirth": "2024-01-22"
  }
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  author = 'Grzegorz';
  usersData: UserData[] = mockData;

  addUserData(currentUserData: UserData): void {
    this.usersData.push(currentUserData)
  }


  removeUser(user: UserData): void {
    // TODO
  }

}
