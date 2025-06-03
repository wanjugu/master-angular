import { Component, output, Input, Output, EventEmitter } from '@angular/core';


import { TasksService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string; // Input property for user ID
  @Input({ required: true }) name!: string; // Input property for task ID


  constructor(private taskService: TasksService){} //define the constructor to inject the TasksService
 

  isAddingTask = false; // Flag to track if the user is adding a new task
  
  get SelectedUserTasks() {
    return this.taskService.getUserTasks(this.userId); 
  }
  
  onCompleteTask(id:string){}

  onStartAddTask() {
    this.isAddingTask = true; // Set the flag to true when the user starts adding a new task
  }

  public onCancelAddTask() {
     this.isAddingTask = false;
  }

}
