import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private todoService: TodoService) {}

  onSubmit(form: NgForm) {
    if (form.value.title) {
      this.todoService.addTodo(form.value.title);
      form.resetForm();
    }
  }
}
