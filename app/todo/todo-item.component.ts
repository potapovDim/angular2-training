import {Component, Input} from "angular2/src/core/metadata";


@Component({
    selector: 'todo-item',
    templateUrl:'./app/todo/todo-item.component.html',
    inputs: ['todo'],

})

export class TodoItem {
    @Input() todo: string
}