import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsListComponent } from './components/points-list/points-list.component';
import { PointPreviewComponent } from './components/point-preview/point-preview.component';
import { NbButtonModule, NbIconModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePointComponent } from './components/create-point/create-point.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PointDetailsComponent } from './components/point-details/point-details.component';
import { FilesModule } from '../files/files.module';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    DragDropModule,
    SharedModule,
    NbTooltipModule,
    TranslateModule,
    FilesModule,
  ],
  declarations: [
    PointsListComponent,
    PointPreviewComponent,
    CreatePointComponent,
    PointDetailsComponent,
  ],
  exports: [
    PointsListComponent,
    PointPreviewComponent,
  ],
})
export class PointsModule { }
