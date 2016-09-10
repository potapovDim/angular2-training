import {Component} from 'angular2/core'
import {TodoListComponent} from './todo/todo-list.component'
@Component({
    selector: "todo-app",
    templateUrl: './app/app.component.html',
    directives: [TodoListComponent]
})


export class AppComponent {
    title: string;
    todos: string[];

    constructor() {
        this.title = 'Todo';
        this.todos = []
    }

    addTodo = (value: string)=> {
        if (value.length === 0) return
        else
            this.todos.push(value)
    }

    deleteTodo = (todo)=> {
    }
}
