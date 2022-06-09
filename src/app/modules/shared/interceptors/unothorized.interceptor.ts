import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from '../../features/authentification/services/authentication.service';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UnothorizedInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private nbToastrService: NbToastrService,
    private translateService: TranslateService,
  ) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      tap({
        error: (error: unknown) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status !== HttpStatusCode.Unauthorized) {
              return;
            }
            this.authenticationService.logout();
            this.nbToastrService.info(
              this.translateService.instant('SessionExpiredMessage'),
              this.translateService.instant('SessionExpired'),
            );
          }
        },
      }),
    );
  }

}
