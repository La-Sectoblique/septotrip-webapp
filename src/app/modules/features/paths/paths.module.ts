import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathPreviewComponent } from './components/path-preview/path-preview.component';
import { NbButtonModule, NbTooltipModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbTooltipModule,
    NbButtonModule,
  ],
  declarations: [
    PathPreviewComponent,
  ],
  exports: [
    PathPreviewComponent,
  ],
})
export class PathsModule { }
