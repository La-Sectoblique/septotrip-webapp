import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { AuthentificationModule } from './modules/features/authentification/authentification.module';
import { StepModule } from './modules/features/step/step.module';
import { TripModule } from './modules/features/trip/trip.module';
import { FeaturesStoreModule } from './store/features-store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Store imports
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FeaturesStoreModule,
    //
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    FormsModule,
    CoreModule,
    TripModule,
    StepModule,
    NbLayoutModule,
    AuthentificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
