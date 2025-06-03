import { Injectable } from '@angular/core';
import { type NewTask } from './task/task.model';

@Injectable({providedIn: 'root'}) //Make the service available application-wide
export class TasksService {
  private tasks = [
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

  constructor(){
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addUserTask(userId: string, task: NewTask) {
    this.tasks.unshift({
      //or push to add at the end
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: new Date(task.dueDate).toISOString().split('T')[0], // Format the due date to 'YYYY-MM-DD'
    });

    // isAddingTask = false; // Reset the flag after adding the task
    console.log(`New task added: ${task.title}`);
    this.saveTasksToLocalStorage(); // Save tasks to local storage after adding a new task
  }

    removeUserTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        console.log(`Task with ID ${id} removed from the list.`);

        this.saveTasksToLocalStorage(); // Save tasks to local storage after removing a task
    }

    private saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}
