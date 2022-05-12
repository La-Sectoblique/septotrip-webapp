import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelersListComponent } from './components/travelers-list/travelers-list.component';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
  ],
  declarations: [
    TravelersListComponent,
  ],
  exports: [
    TravelersListComponent,
  ],
})
export class TravelersModule { }
