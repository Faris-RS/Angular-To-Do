import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonText: string = 'Button Text';
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  clearCompleted(): void {
    this.buttonClicked.emit();
  }
}
