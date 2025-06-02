import { Component, computed, signal,Input, input } from '@angular/core';

// import {DUMMY_USERS} from '../dummyusers'; // Importing the dummy users data

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // @Input({required:true}) avatar!: String;
  // @Input({required:true}) name!: String;

  avatar = input.required<String>();
  name = input.required<String>();



  public get imagePath() { 
  return 'assets/users/' + this.avatar(); 
  }

  public onSelectUser() {
    console.log('Active user::' + this.name()); // Log the selected user to the console

  }


  // public selectedUser = DUMMY_USERS[randomIndex]; // Select a random user from the dummy users
  // Using a signal to track the selected user
//   public selectedUser = signal(DUMMY_USERS[randomIndex]); // Uncomment if using Angular signals
// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // Computed property to get the image path dynamically



  //Using getters
  // public get imagePath() { 
  //   return `assets/users/${this.selectedUser.avatar}`; // Return the path to the user's avatar image
  //   // Return the path to the user's avatar image using signal
  // }

  // public onSelectUser() {
  //   // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   // this.selectedUser = DUMMY_USERS[randomIndex]; // Select a new random user when the button is clicked

  //   this.selectedUser.set(DUMMY_USERS[randomIndex]); // Update the selected user using the signal
  //   console.log('Active user::' + this.selectedUser().name); // Log the selected user to the console
  
  // }



}
