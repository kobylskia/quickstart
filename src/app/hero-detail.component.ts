import {Component, Input} from '@angular/core';
import {Hero} from './hero';
/**
 * Created by akobylski on 07.07.2017.
 */

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="='name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  constructor(
    private heroService: He
  )
}
