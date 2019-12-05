import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list/countries-list.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SearchListComponent } from './search-list/search-list.component';


@NgModule({
  declarations: [CountriesListComponent, RegionsListComponent,LoadingComponent, SearchListComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    
  ],
  exports: [CountriesListComponent, RegionsListComponent,LoadingComponent, SearchListComponent]
})
export class SharedModule { }
