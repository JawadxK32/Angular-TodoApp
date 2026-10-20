import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { todosModel } from '../Models/todos.interface';

@Service()
export class TodoService {
    http = inject(HttpClient);

    getTodosListFromAPI() {
        const url = 'https://jsonplaceholder.typicode.com/todos';

        return this.http.get<Array<todosModel>>(url)
        .pipe(catchError(err => {
            console.error(err);
            throw err;
        }))
    }
}
