import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule

  ],
  exports:
    [
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatSidenavModule,
      MatInputModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatButtonToggleModule
    ],
  declarations: [MaterialComponent]
})
export class MaterialModule { }
