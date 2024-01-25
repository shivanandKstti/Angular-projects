import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  todos = [
    {
      title: 'Learning Angular',
      completed: true
    },
    {
      title: 'Build todo App',
      completed: false
    }
  ];

  addTodo(event: any){
    this.todos.push({
      title: event.value,
      completed: false
    });
  }

  toggleTodo(todo: { completed: boolean; }){
    todo.completed = !todo.completed;
  }
}
