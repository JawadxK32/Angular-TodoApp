import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.scss',
  templateUrl: './counter.html',
})
export class Counter {
  counter = signal(0);

  increment() {
    this.counter.update(val => val + 1);
  }
  decrement() {
    this.counter.update(val => val - 1);
  }
  reset() {
    this.counter.set(0);
  }
}
