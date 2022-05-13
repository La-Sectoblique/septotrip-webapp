import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsListComponent } from './components/points-list/points-list.component';
import { PointPreviewComponent } from './components/point-preview/point-preview.component';
import { NbButtonModule, NbIconModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { CreatePointComponent } from './components/create-point/create-point.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    NbInputModule,
    DragDropModule,
    SharedModule,
    NbTooltipModule,
  ],
  declarations: [
    PointsListComponent,
    PointPreviewComponent,
    CreatePointComponent,
  ],
  exports: [
    PointsListComponent,
    PointPreviewComponent,
  ],
})
export class PointsModule { }
