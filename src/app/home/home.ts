import { Component, signal } from '@angular/core';
import { Greetings } from '../greetings/greetings';
import { Counter } from '../counter/counter';

@Component({
  imports: [Greetings,Counter],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  greetingMsg = signal('Hello greetings');
}
