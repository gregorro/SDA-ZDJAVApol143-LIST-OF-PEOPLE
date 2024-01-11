import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent, UserData } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  author = 'Grzegorz';
  usersData: UserData[] = []

  addUserData(currentUserData: UserData): void {
    this.usersData.push(currentUserData)
  }

}
