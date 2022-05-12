import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { DaysModule } from './modules/features/days/days.module';
import { PointsModule } from './modules/features/points/points.module';
import { StepModule } from './modules/features/step/step.module';
import { TripModule } from './modules/features/trip/trip.module';
import { FeaturesStoreModule } from './store/features-store.module';
import { AuthentificationModule } from './modules/features/authentification/authentification.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './modules/helpers/auth.guard';

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
    StoreDevtoolsModule.instrument({}),
    FeaturesStoreModule,
    //
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    FormsModule,
    CoreModule,
    TripModule,
    StepModule,
    DaysModule,
    PointsModule,
    NbLayoutModule,
    AuthentificationModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
