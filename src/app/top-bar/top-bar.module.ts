import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CooperationDialogComponent } from './components/cooperation-dialog/cooperation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    TopBarComponent,
    CooperationDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
