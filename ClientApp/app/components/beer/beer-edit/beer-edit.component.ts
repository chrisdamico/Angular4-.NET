import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
    selector: 'beer-edit',
    templateUrl: './beer-edit.component.html'
})
export class BeerEditComponent implements OnInit{
    id: number;
    isEditMode: boolean = false;
    beerForm: FormGroup;

    constructor(private activeRoute: ActivatedRoute,
        private beerService: BeerService,
        private router: Router) {
        
    }

    ngOnInit() {
        this.activeRoute.params
            .subscribe(
            (params: Params) => {
                console.log('in params');
                this.id = +params['id'];
                this.isEditMode = params['id'] != null;
                this.initForm();
            });
        
    }

    private initForm() {
        let name = "";
        let description = "";
        let style = "";
        let abv = 0;
        let ibu = 0;
        let rating = 0;
        let brewery = "";

        if (this.isEditMode) {
            const beer = this.beerService.getBeer(this.id);
            name = beer.name;
            description = beer.description;
            style = beer.style;
            abv = beer.abv;
            ibu = beer.ibu;
            rating = beer.rating;
            brewery = beer.brewery;
        }

            this.beerForm = new FormGroup({
                'name': new FormControl(name, Validators.required),
                'description': new FormControl(description, Validators.required),
                'style': new FormControl(style, Validators.required),
                'abv': new FormControl(abv, Validators.required),
                'ibu': new FormControl(ibu, Validators.required),
                'rating': new FormControl(rating, Validators.required),
                'brewery': new FormControl(brewery, Validators.required)
        });
           
         
    }

    onSubmit() {
       
        if (this.isEditMode) {
            this.beerService.editBeer(this.id, this.beerForm.value);
            this.router.navigate(['beers', this.id]);
        }
        else {
            this.beerService.addBeer(this.beerForm.value);
            this.router.navigate(['beers']);
        }
       
    }

    onCancel() {
        this.router.navigate(['beers', this.id]);
    }

    

}
