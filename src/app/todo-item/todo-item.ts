import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { todosModel } from '../Models/todos.interface';
import { UpperCasePipe } from '@angular/common';
import { HighlightCompletedTodo } from '../directives/highlight-completed-todo';

@Component({
  imports: [UpperCasePipe,HighlightCompletedTodo],
  selector: 'app-todo-item',
  styleUrl: './todo-item.scss',
  templateUrl: './todo-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem {
  todoItem = input.required<todosModel>();
  todoCompleted = output<todosModel>();

  todoClicked() {
    this.todoCompleted.emit(this.todoItem());
  }
}
