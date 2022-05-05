import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterPointsByStepIdPipe } from './pipes/filter-points-by-stepId.pipe';
import { FilterPointsByDayIdPipe } from './pipes/filter-points-by-dayId.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    FilterPointsByStepIdPipe,
    FilterPointsByDayIdPipe,
  ],
  exports: [
    LoaderComponent,
    FilterPointsByStepIdPipe,
    FilterPointsByDayIdPipe,
  ],
})
export class SharedModule { }
