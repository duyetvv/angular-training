import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('appHover') color: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.color || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  setColor(color): void {
    this.elementRef.nativeElement.style.color = color;
  }

}
