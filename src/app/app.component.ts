import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { UserComponent } from './user/user.component';  

import { TaskComponent } from './task/task.component';

import { DUMMY_USERS } from './dummyusers';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS

  selectedUserId? : String;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id; // Update the selected user ID

    console.log('Selected user ID:', id);
  

  }
}


