import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FiltersComponent } from './filters/filters.component';
import { ResultComponent } from './result/result.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [SearchComponent, FiltersComponent, ResultComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatListModule,
    
  
  ]
})
export class SearchModule { }
