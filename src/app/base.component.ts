import { Injector } from '@angular/core';

import { CarService } from './car.service'

export class baseComponent {

    public speed = 0;
    public carService: CarService;

    constructor(
        injector: Injector,
    ){
        this.carService = injector.get(CarService);

    }

}