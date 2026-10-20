import { Component, inject, OnInit, signal } from '@angular/core';
import { todosModel } from '../Models/todos.interface';
import { TodoService } from '../services/todo-service';
import { TodoItem } from '../todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipePipe } from '../pipes/filter-todos-pipe-pipe';

@Component({
  imports: [TodoItem,FormsModule,FilterTodosPipePipe],
  selector: 'app-todos',
  styleUrl: './todos.scss',
  templateUrl: './todos.html',
})
export class Todos implements OnInit {

  todoService = inject(TodoService);
  todosList = signal<Array<todosModel>>([]);
  searchTerm = signal('');

  ngOnInit() {
    this.todoService.getTodosListFromAPI()
    .subscribe(todos => this.todosList.set(todos));
  }

  updateTodo(todoItem: todosModel) {
    this.todosList.update(todos => {
      return todos.map(todo => {
        if(todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

}
