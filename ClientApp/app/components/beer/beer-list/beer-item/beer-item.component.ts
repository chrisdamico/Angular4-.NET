
import { Component, Input} from '@angular/core';
import { Beer } from '../../beer.model';

@Component({
    selector: 'beer-item',
    templateUrl: './beer-item.component.html'
})
export class BeerItemComponent{
    @Input() index: number;
    @Input() beer: Beer;

    constructor() {
    
    }
    
}
