import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges{

  constructor(
      private eleRef: ElementRef,
      private renderer: Renderer2
  ) { 
  }

  /* Input Value will be set in setter or ngOnChanges */
  @Input()
  set highlight(value: string) {
    this.renderer.addClass(this.eleRef.nativeElement, value);
  };

  ngOnChanges(changes: SimpleChanges): void {
    // this.renderer.addClass(this.eleRef.nativeElement, this.highlight);
  }

  @HostListener('mouseenter')
  onClick() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'cursor','pointer');
  }

}
