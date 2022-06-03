import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepPreviewComponent } from './components/step-preview/step-preview.component';
import { StepsListComponent } from './components/steps-list/steps-list.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateStepComponent } from './components/create-step/create-step.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DaysModule } from '../days/days.module';
import { PathsModule } from '../paths/paths.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NbInputModule,
    DragDropModule,
    DaysModule,
    PathsModule,
  ],
  declarations: [
    StepPreviewComponent,
    StepsListComponent,
    CreateStepComponent,
  ],
  exports: [
    StepPreviewComponent,
    StepsListComponent,
  ],
})
export class StepModule { }
