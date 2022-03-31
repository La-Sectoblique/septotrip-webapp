import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StepPreviewComponent } from './components/step-preview/step-preview.component';
import { StepsListComponent } from './components/steps-list/steps-list.component';
import { SharedModule } from '../../shared/shared.module';
import { AddStepComponent } from './components/add-step/add-step.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    SharedModule,
    NbInputModule,
    FormsModule,
  ],
  declarations: [
    StepPreviewComponent,
    StepsListComponent,
    AddStepComponent,
  ],
  exports: [
    StepPreviewComponent,
    StepsListComponent,
  ],
})
export class StepModule { }
