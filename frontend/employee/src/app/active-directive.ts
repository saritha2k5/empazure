import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @HostBinding('style.color')
  textColor = 'black';

  @HostListener('mouseenter')
  onEnter() {
    this.textColor = 'red';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.textColor = 'black';
  }

}
