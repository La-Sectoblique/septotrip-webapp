import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StepPreviewComponent } from './comonents/step-preview/step-preview.component';
import { StepsListComponent } from './comonents/steps-list/steps-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
  ],
  declarations: [
    StepPreviewComponent,
    StepsListComponent,
  ],
  exports: [
    StepPreviewComponent,
    StepsListComponent,
  ],
})
export class StepModule { }
