import { Component } from '@angular/core';
import { Main } from './containers';

@Component({
  selector: 'app',
  directives: [
  	Main
  ],
  template: `
    <div>
      <h3>
        Yo, world!
      </h3>
      <main-container></main-container>
    </div>
  `
})
export class App {}
