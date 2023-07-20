import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.getTodos();
  }

  onClearCompleted(): void {
    const completedTodos = this.todos.filter((todo) => todo.isComplete);
    if (completedTodos.length > 0) {
      const confirmation = window.confirm('Are you sure you want to clear all completed todos?');
      if (confirmation) {
        const completedTodoIds = completedTodos.map((todo) => todo.id);
        this.todoService.deleteTodos(completedTodoIds);
      }
    }
  }

  onFormSubmitted(title: string): void {
    this.todoService.addTodo(title);
  }
}
