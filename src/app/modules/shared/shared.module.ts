import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterPointsByStepIdPipe } from './pipes/filter-points-by-stepId.pipe';
import { FilterPointsByDayIdPipe } from './pipes/filter-points-by-dayId.pipe';
import { FilterPointsByPointIdsPipe } from './pipes/filter-points-by-pointIds.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    FilterPointsByStepIdPipe,
    FilterPointsByDayIdPipe,
    FilterPointsByPointIdsPipe,
  ],
  exports: [
    LoaderComponent,
    FilterPointsByStepIdPipe,
    FilterPointsByDayIdPipe,
    FilterPointsByPointIdsPipe,
  ],
})
export class SharedModule { }
