import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() {}

  increaseSpeed(speed){
    // const x = speed + 1;
    return ++speed
  }

  stop(){
    return 0;
  }

  decreaseSpeed(speed){
    if(speed > 0){
      return --speed;
    }
    return 0;
  }

}
