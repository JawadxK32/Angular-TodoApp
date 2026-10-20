import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greetings',
  styleUrl: './greetings.scss',
  templateUrl: './greetings.html',
})
export class Greetings {
  greetingMsg = input();
}
