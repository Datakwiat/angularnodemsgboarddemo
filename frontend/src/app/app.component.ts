import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1> Hello {{title}} </h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DK frontend';
}
