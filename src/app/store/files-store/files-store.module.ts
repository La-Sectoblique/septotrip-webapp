import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FILES_FEATURE_KEY } from './state/files.selectors';
import { filesReducer } from './state/files.reducer';
import { FilesEffects } from './state/files.effects';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FILES_FEATURE_KEY, filesReducer),
    EffectsModule.forFeature([FilesEffects]),
  ],
  declarations: [],
})
export class FilesStoreModule { }
