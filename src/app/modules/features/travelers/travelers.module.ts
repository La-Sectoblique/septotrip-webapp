import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelersListComponent } from './components/travelers-list/travelers-list.component';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelerPreviewComponent } from './components/traveler-preview/traveler-preview.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
    TranslateModule,
  ],
  declarations: [
    TravelersListComponent,
    TravelerPreviewComponent,
  ],
  exports: [
    TravelersListComponent,
  ],
})
export class TravelersModule { }
