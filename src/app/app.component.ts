import {Component} from '@angular/core';
/**
 * Created by akobylski on 07.07.2017.
 */


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    </nav>
  `
})

export class AppComponent {
  title = 'Super Title';
}
