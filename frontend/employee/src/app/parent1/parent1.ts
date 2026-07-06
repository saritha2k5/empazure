import { Component } from '@angular/core';
import { Child1 } from '../child1/child1';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [Child1],
  template: `
    <button (click)="changeName()">Change Name</button>

    <app-child1 [name]="userName"></app-child1>
  `,
  styleUrl: './parent1.css'
})
export class Parent1 {
  userName: string = 'John';

  changeName() {
    this.userName = 'David';
  }

  employeeName="John";

 receivedMessage = '';
  receiveMessage(msg: string) {
    this.receivedMessage = msg;
  }



}
