import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private todoService: TodoService) {}

  icon = faPlus;

  onSubmit(form: NgForm) {
    if (form.value.title) {
      this.todoService.addTodo(form.value.title);
      form.resetForm();
    }
  }
}
