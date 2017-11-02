import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { BeerListComponent } from './components/beer/beer-list/beer-list.component';
import { BeerItemComponent } from './components/beer/beer-list/beer-item/beer-item.component';
import { BeerEditComponent } from './components/beer/beer-edit/beer-edit.component';
import { BeerDetailComponent } from './components/beer/beer-detail/beer-detail.component';
import { BeersComponent } from './components/beer/beers.component';
import { BeerService } from './components/beer/beer.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BeerListComponent,
        BeerItemComponent,
        BeerEditComponent,
        BeerDetailComponent,
        BeersComponent

    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'beers', pathMatch: 'full' },
            {
                path: 'beers', component: BeersComponent, children: [
                    { path: 'new', component: BeerEditComponent },
                    { path: ':id', component: BeerDetailComponent },
                    { path: ':id/edit', component: BeerEditComponent }
                   
                ]
            },
            { path: '**', redirectTo: 'beers' }
        ])
    ],
    providers:[BeerService]
    
})
export class AppModuleShared {
}
