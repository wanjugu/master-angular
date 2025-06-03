import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task; // Input property for task ID
  @Output() complete = new EventEmitter<string>(); // Output event emitter for task completion

  onCompleteTask() {
    this.complete.emit(this.task.id); // Emit the complete event when a task is completed
  }

  
}
