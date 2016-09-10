import {Component} from 'angular2/core'

@Component({
    selector: "todo-app",
    templateUrl: './app/app.component.html'
})


export class AppComponent {
    title: string;
    todos: string[];

    constructor() {
        this.title = 'Todo';
        this.todos = []
    }

    addTodo = (value: string)=> {
        this.todos.push(value)
    }

    deleteTodo = (todo)=> {

    }
}
