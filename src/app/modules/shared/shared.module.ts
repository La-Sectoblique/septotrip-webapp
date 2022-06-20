import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterPointsByStepIdPipe } from './pipes/filter-points-by-stepId.pipe';
import { FilterPointsByDayIdPipe } from './pipes/filter-points-by-dayId.pipe';
import { FilterPointsByPointIdsPipe } from './pipes/filter-points-by-pointIds.pipe';
import { FilterDocumentByFileTypePipe } from './pipes/files/filter-document-by-file-type.pipe';
import { NbIconModule, NbTabsetModule } from '@nebular/theme';
import { TripElementDetailsComponent } from './components/trip-element-details/trip-element-details.component';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbTabsetModule,
  ],
  declarations: [
    LoaderComponent,
    FilterPointsByStepIdPipe,
    FilterPointsByDayIdPipe,
    FilterPointsByPointIdsPipe,
    FilterDocumentByFileTypePipe,
    TripElementDetailsComponent,
  ],
  exports: [
    LoaderComponent,
    FilterPointsByStepIdPipe,
    FilterPointsByDayIdPipe,
    FilterPointsByPointIdsPipe,
    FilterDocumentByFileTypePipe,
    TripElementDetailsComponent,
  ],
})
export class SharedModule { }
