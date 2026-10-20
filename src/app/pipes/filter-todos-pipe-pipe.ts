import { Pipe, PipeTransform } from '@angular/core';
import { todosModel } from '../Models/todos.interface';

@Pipe({
  name: 'filterTodosPipe',
})
export class FilterTodosPipePipe implements PipeTransform {
  transform(todos: todosModel[], searchTerm: string): todosModel[] {

    if(!searchTerm) {
      return todos;
    }
    const searchTermText = searchTerm.toLowerCase();
    return todos.filter(todo => {
      return todo.title.toLocaleLowerCase().includes(searchTermText);
    })
  }
}
