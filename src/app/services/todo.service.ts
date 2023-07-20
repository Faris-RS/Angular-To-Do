import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    // Load todos from local storage when the service initializes
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos).map(
        (todoData: any) =>
          new Todo(Guid.parse(todoData.id), todoData.title, todoData.isComplete)
      );
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const todo = new Todo(Guid.create(), title, false);
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  completeTodo(id: Guid): void {
    const todo = this.todos.find((x) => x.id === id);
    if (todo) {
      todo.isComplete = !todo.isComplete;
      this.saveToLocalStorage();
    }
  }

  deleteTodo(id: Guid): void {
    const index = this.todos.findIndex((x) => x.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  deleteTodos(todoIds: Guid[]): void {
    this.todos = this.todos.filter((todo) => !todoIds.includes(todo.id));
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    const serializedTodos = this.todos.map((todo) => {
      return {
        id: todo.id.toString(),
        title: todo.title,
        isComplete: todo.isComplete,
      };
    });

    localStorage.setItem('todos', JSON.stringify(serializedTodos));
  }
}
