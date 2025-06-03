import { Component,Output, EventEmitter, inject, Input} from '@angular/core';
import { TasksService } from '../task.service'; // Import the TasksService to handle task operations


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})


export class NewTaskComponent {

  enteredTitle = ''; 
  enteredSummary = ''; 
  enteredDueDate = ''; 



  @Input({ required: true }) userId!: string; // Input property for user ID
  @Output() closeDialog = new EventEmitter<void>(); // Output event emitter for task creation
  // @Output () newTask = new EventEmitter<NewTask>(); // Output event emitter for task creation

  private tasksService = inject(TasksService); // Inject the TasksService to handle task operations

  onCancel() {
    this.closeDialog.emit(); // Emit the cancel event when the user cancels task creation
  }

  onSubmit(){
   
    this.tasksService.addUserTask(
      this.userId,
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }
  );
  
    // Reset the form fields after submission
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';

    this.closeDialog.emit();
  }
  
}


