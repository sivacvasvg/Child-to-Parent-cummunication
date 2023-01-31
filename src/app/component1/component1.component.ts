import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  count:number=0;
  updateCount(newCounter:number) {
    this.count=newCounter;
  }
 

}


