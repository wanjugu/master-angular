import { Component, output,Input } from "@angular/core";


@Component({
  selector: "app-task",
  standalone: true,
  imports: [],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css"
})
export class TaskComponent {

@Input({ required: true }) name!: string; // Input property for task ID

select = output<string>(); // Output event emitter for task selection


  onSelectedUser(name: string) {
    console.log('Selected user Name:', name);
  }

}