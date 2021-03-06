import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatListModule} from '@angular/material/list'
import { SharedModule } from '../shared/shared.module';
import { LoadingComponent } from '../shared/loading/loading.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule,
    SharedModule
    
    
  ]
})
export class HomeModule { }
