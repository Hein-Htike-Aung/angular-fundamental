import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[backgroundColor]',
})
export class BackgroundDirective implements OnChanges {
  @Input()
  backgroundColor?: string;

  constructor(private rendender: Renderer2, private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.backgroundColor
      ? this.setBackgroundColor(this.backgroundColor)
      : this.setBackgroundColor('none');
  }

  private setBackgroundColor(value: string) {
    this.rendender.setStyle(this.element.nativeElement, 'background', value);
  }
}
