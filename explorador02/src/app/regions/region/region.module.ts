import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { RegionCardComponent } from './region-card/region-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MatIconModule

  ]
})
export class RegionModule { }
