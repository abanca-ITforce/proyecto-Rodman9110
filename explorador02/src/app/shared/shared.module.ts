import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list/countries-list.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [CountriesListComponent, RegionsListComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [CountriesListComponent, RegionsListComponent]
})
export class SharedModule { }
