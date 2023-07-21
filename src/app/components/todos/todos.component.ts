import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Guid } from 'guid-typescript'; 
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  constructor(private todoService: TodoService) {}

  icon = faTrash;

  get todos() {
    return this.todoService.getTodos();
  }

  onComplete(id: Guid) {
    this.todoService.completeTodo(id);
  }

  onDelete(id: Guid) {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      this.todoService.deleteTodo(id);
    }
  }
}
