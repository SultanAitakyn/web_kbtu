import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  loginAction,
  loginSuccessAction,
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from 'src/app/auth/store/actions';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from 'src/app/auth/services/auth.service';
import {map, of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(map((currentUser: CurrentUserInterface) => {
            return loginSuccessAction({currentUser})
          }),
          catchError(() => {
            return of(registerFailureAction())
          })
        )
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {

  }
}
