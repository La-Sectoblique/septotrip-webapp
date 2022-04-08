import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsListComponent } from './components/points-list/points-list.component';
import { PointPreviewComponent } from './components/point-preview/point-preview.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
  ],
  declarations: [
    PointsListComponent,
    PointPreviewComponent,
  ],
  exports: [
    PointsListComponent,
    PointPreviewComponent,
  ],
})
export class PointsModule { }
