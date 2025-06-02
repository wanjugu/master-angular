import { Component, computed, signal,Input, input, Output,EventEmitter,output } from '@angular/core';

import { type User } from './user.model'; // Import the User model

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {


  @Input({ required: true }) user!: User; // Input property for user ID
  @Input({ required: true }) selected!: boolean; // Input property for selected user ID
  select = output<string>(); // Output event emitter for user selection

  // avatar = input.required<String>();
  // name = input.required<String>();
  imagePath = computed(() => 'assets/users/' + this.user.avatar); // Computed property to get the image path dynamically






  public onSelectUser() {
    this.select.emit(this.user.id); // Emit the select event when the user is selected

  }



}
