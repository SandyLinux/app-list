import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element:ElementRef) { 
    console.log(Element);
    this.func(Element);
    console.log(Element.nativeElement.childNodes[0].data)
    Element.nativeElement.childNodes[0].data = 'new text is changed'
  }
  func(Element:ElementRef){
    Element.nativeElement.innerText= ' text is changed by changetext Directive.'
  }

}
