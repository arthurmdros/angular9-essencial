import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cpNgFor]'
})
export class ForDirective implements OnInit{

  @Input("cpNgForEntre") numbers: any[] = [];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {}

  ngOnInit(): void {
    for(let number of this.numbers){
      console.log(number)
      this.container.createEmbeddedView(this.template, { $implicit: number})
    }
  }
}
