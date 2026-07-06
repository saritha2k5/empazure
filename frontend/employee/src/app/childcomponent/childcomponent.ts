import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
    standalone: true,
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.css',
})
export class Childcomponent {

  @Input() name:string='';
  @Output() sendData=new EventEmitter<string>();

  sendMessage()
  {
  this.sendData.emit("Hello Parent")
}
}