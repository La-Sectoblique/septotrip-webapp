import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbGlobalPhysicalPosition, NbLayoutModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { DaysModule } from './modules/features/days/days.module';
import { PointsModule } from './modules/features/points/points.module';
import { StepModule } from './modules/features/step/step.module';
import { TravelersModule } from './modules/features/travelers/travelers.module';
import { TripModule } from './modules/features/trip/trip.module';
import { FeaturesStoreModule } from './store/features-store.module';
import { AuthentificationModule } from './modules/features/authentification/authentification.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './modules/helpers/auth.guard';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PathsModule } from './modules/features/paths/paths.module';
import { UnothorizedInterceptor } from './modules/shared/interceptors/unothorized.interceptor';
import { AuthenticationService } from './modules/features/authentification/services/authentication.service';


export const httpTranslateLoader = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http);

const appUserInitializer = (authenticationService: AuthenticationService) => () => Promise.all([
  authenticationService.getCurrentJwtUser(),
]);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // Store imports
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    FeaturesStoreModule,
    // i18n
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    //
    NbThemeModule.forRoot({ name: 'septoStyle' }),
    NbEvaIconsModule,
    FormsModule,
    CoreModule,
    TripModule,
    StepModule,
    DaysModule,
    PointsModule,
    TravelersModule,
    NbLayoutModule,
    AuthentificationModule,
    HttpClientModule,
    NbToastrModule.forRoot({
      limit: 3,
      duplicatesBehaviour: 'all',
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    }),
    PathsModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: appUserInitializer,
      multi: true,
      deps: [AuthenticationService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnothorizedInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

