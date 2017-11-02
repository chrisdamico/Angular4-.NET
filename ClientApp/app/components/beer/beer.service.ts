import { Subject } from 'rxjs/Subject';

import { Beer } from './beer.model';

export class BeerService {
    beersChanged = new Subject<Beer[]>();
    private beers: Beer[] =
    [new Beer(1, 'Dear You', 'Fruity, low bitterness', 'Saison', 5.5, 30, 4.5, 'Ratio'),
    new Beer(2, 'Baereliner Weisse', 'Slight tartness, dry finish', 'Berliner Weisse', 4.2, 15, 4, 'Baere'),
    new Beer(3, 'Juicy Bits', 'All the dry hops.', 'NE Style IPA', 7, 60, 4, 'Weldwerks'),
    new Beer(4, 'Gilpin Black Gold', 'Chocolatey, well-balanced', 'Robust Porter', 6.2, 45, 4.5, 'Hogshead')

    ];

    constructor() { }

    getBeers() {
        return this.beers.slice();
    }

    getBeer(index: number) {
        return this.beers[index];
    }
    addBeer(beer: Beer) {
        this.beers.push(beer);
        this.beersChanged.next(this.beers.slice());
    }

    removeBeer(beerIndex: number) {
        this.beers.splice(beerIndex, 1);
        this.beersChanged.next(this.beers.slice());
    }

    editBeer(beerIndex: number, beer: Beer) {
        this.beers[beerIndex] = beer;
        this.beersChanged.next(this.beers.slice());
    }
}