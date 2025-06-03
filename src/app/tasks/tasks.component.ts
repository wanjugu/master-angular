import { Component, output, Input, Output, EventEmitter } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { NewTaskComponent } from './new-task/new-task.component'; // Import the NewTaskComponent

import { type NewTask } from './task/task.model'; // Import the Task model

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string; // Input property for user ID
  @Input({ required: true }) name!: string; // Input property for task ID
 

  isAddingTask = false; // Flag to track if the user is adding a new task
  
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2025-07-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2025-06-15',
    },
  ];

  get SelectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  
  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id); // Remove the completed task from the list
    console.log(`Task with ID ${id} completed and removed from the list.`);
  }

  onStartAddTask() {
    this.isAddingTask = true; // Set the flag to true when the user starts adding a new task
  }

  public onCancelAddTask() {
     this.isAddingTask = false;
  }

  public onAddTask(task: NewTask) {

    this.tasks.unshift({ //or push to add at the end
      id:  Math.random().toString(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: new Date(task.dueDate).toISOString().split('T')[0] // Format the due date to 'YYYY-MM-DD'
      
    });
   
    this.isAddingTask = false; // Reset the flag after adding the task
    console.log(`New task added: ${task.title}`);
  }
  
}
