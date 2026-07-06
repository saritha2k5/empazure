import { Component, Input,Output,EventEmitter, OnChanges,SimpleChanges } from '@angular/core';
import { Parent1 } from '../parent1/parent1';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
 // templateUrl: './child1.html',
   template: `<p>{{ name }}</p>`,
  styleUrl: './child1.css',
})
export class Child1 implements OnChanges{

    @Input() name = '';
     ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


/*@Input()

name:string='';
*/
@Output()
messageEvent = new EventEmitter<string>();


  sendMessage() {
    this.messageEvent.emit('Hello from Child Component');
  }


}
