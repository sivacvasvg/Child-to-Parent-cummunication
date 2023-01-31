import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  @Input()counter:any;
 @Output()newCounter:EventEmitter<any>= new EventEmitter();
  degFunction() {
    this.counter--;
    this.newCounter.emit(this.counter)
      }
    
      ingcreFunction() {
        this.counter++;
        this.newCounter.emit(this.counter);
      }

}
