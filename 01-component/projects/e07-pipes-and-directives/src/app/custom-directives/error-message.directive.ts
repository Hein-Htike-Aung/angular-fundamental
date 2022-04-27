import { FormControl, AbstractControl } from '@angular/forms';
import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[errorMessage]'
})
export class ErrorMessageDirective implements OnChanges{

  @Input()
  errorMessage: AbstractControl | null | undefined;
  @Input()
  errorMessageName?: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef

  ) {}

  ngOnChanges(changes: SimpleChanges): void {

    this.errorMessage?.statusChanges.subscribe(status => {
      if(status == 'VALID') {
        this.container.clear();
        
      }else {
        const view = this.container.createEmbeddedView(this.templateRef);
        view.rootNodes[0].innerText = `${this.errorMessageName || 'Value'} is required.`;
      }

    })
    
  }


}
