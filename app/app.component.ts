import {Component} from 'angular2/core'

@Component({
    selector: "todo-app",
    templateUrl: './app/app.component.html'
})


export class AppComponent {
    title:string;
    todos:string[];

    constructor() {
        this.title = 'Todo';
        this.todos = ['dsl;akd;lask;d', 'das;lkjd;alsk', 'dlakl;dska']
    }

    addTodo = (todo)=> {
        this.todos.push(todo.value)
    }

    deleteTodo = (todo)=> {

    }
}
