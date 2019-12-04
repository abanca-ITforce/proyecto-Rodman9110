import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatFormFieldModule,
    SharedModule,
    MatSelectModule
  
  ]
})
export class SearchModule { }
