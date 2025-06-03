import { Component,Output, EventEmitter} from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { type NewTask } from '../task/task.model';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})


export class NewTaskComponent {

  enteredTitle = ''; 
  enteredSummary = ''; 
  enteredDueDate = ''; 



  @Output() cancel = new EventEmitter<void>(); // Output event emitter for task creation

  @Output () newTask = new EventEmitter<NewTask>(); // Output event emitter for task creation

  onCancel() {
    this.cancel.emit(); // Emit the cancel event when the user cancels task creation
  }

  onSubmit(){
    const newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };

    this.newTask.emit(newTask); // Emit the new task event with the created task data

    // Reset the form fields after submission
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }
  
}


