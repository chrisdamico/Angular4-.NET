
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';


@Component({
    selector: 'beer-list',
    templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit, OnDestroy{
    beers: Beer[];
    subscription: Subscription;
   

    constructor(private beerService: BeerService,
        private router: Router,
        private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.beerService.beersChanged
            .subscribe(
            (beers: Beer[]) => {
                this.beers = beers;
            }
        );
        this.beers = this.beerService.getBeers();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onCreateBeer() {
        this.router.navigate(['new'], { relativeTo: this.activeRoute });
    }
}
