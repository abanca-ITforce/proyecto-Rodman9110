import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryCardComponent } from './country-card/country-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CountryComponent, CountryCardComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class CountryModule { }
