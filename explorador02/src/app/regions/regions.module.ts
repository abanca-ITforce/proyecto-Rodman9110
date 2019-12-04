import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionComponent } from './region/region.component';
import { RouterModule } from '@angular/router';
import { RegionModule } from './region/region.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    RegionModule,
    SharedModule,
    RouterModule
  ]
})
export class RegionsModule { }
