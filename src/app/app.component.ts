import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
      <h2>{{title}}</h2>
        <main-container></main-container>
      <h1>Hello {{name}}</h1>
    </div>`,
})
export class AppComponent {
  name = 'Angular';
  title = 'Some title';
}
