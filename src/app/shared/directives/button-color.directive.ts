


import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})
export class ButtonColorDirective implements OnInit {

  @Input() appButtonColor: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
     this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appButtonColor);
  }

}
