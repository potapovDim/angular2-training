import {Component} from 'angular2/core'
import {Input} from "angular2/src/core/metadata";
import {TodoItem} from './todo-item.component'

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    inputs: ['todos'],
    directives:[TodoItem]
})


export class TodoListComponent {
    @Input() todos: string[]
}