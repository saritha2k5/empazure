
import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';



@Directive({
  selector: '[Highlight]',
})
export class Highlight {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  
  }
}