import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule, NbTooltipModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepPreviewComponent } from './components/step-preview/step-preview.component';
import { StepsListComponent } from './components/steps-list/steps-list.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateStepComponent } from './components/create-step/create-step.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DaysModule } from '../days/days.module';
import { PathsModule } from '../paths/paths.module';
import { TranslateModule } from '@ngx-translate/core';
import { StepDetailsComponent } from './components/step-details/step-details.component';
import { FilesModule } from '../files/files.module';
import { LottieModule } from 'ngx-lottie';

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
    TranslateModule,
    FilesModule,
    NbTooltipModule,
    LottieModule,
  ],
  declarations: [
    StepPreviewComponent,
    StepsListComponent,
    CreateStepComponent,
    StepDetailsComponent,
  ],
  exports: [
    StepPreviewComponent,
    StepsListComponent,
  ],
})
export class StepModule { }
