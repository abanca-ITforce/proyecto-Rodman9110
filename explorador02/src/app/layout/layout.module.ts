import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { LayoutModule as MaterialLayoutModule} from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../shared/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [NavShellComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatProgressSpinnerModule
   
  ],
  exports: [NavShellComponent]
})
export class LayoutModule { }
