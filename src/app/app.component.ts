import { Component, Injector, OnInit } from '@angular/core';
import { baseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends baseComponent implements OnInit {
  title = 'injector-app';

  constructor(injector: Injector){
    super(injector);
  }

  ngOnInit(): void {
    console.log(this.speed);
  }

  onDecrease(){
    this.speed = this.carService.decreaseSpeed(this.speed);
  }

  onIncrease(){
    this.speed = this.carService.increaseSpeed(this.speed);
  }


}
