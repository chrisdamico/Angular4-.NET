
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BeerService } from '../beer.service';
import { Beer } from '../beer.model';


@Component({
    selector: 'beer-detail',
    templateUrl: './beer-detail.component.html'
})
export class BeerDetailComponent implements OnInit{
    id: number;
    beer: Beer;
    constructor(private beerService: BeerService,
                private router: Router,
                private activatedRoute: ActivatedRoute
    ) {
        
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.beer = this.beerService.getBeer(this.id);
            }
        ); 


    }

    onClickEdit() {
        this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
    }

    onClickDelete() {
        this.beerService.removeBeer(this.id);
        this.router.navigate(['beers']);
    }
}
