import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  loginAction,
  loginSuccessAction,
  registerAction,
  registerFailureAction,
  registerSuccessAction, updateProfileAction, updateProfileSuccessAction
} from 'src/app/auth/store/actions';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from 'src/app/auth/services/auth.service';
import {map, of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {ProfileService} from 'src/app/profile/services/profile.service';

@Injectable()
export class UpdateEffect {
  update$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(updateProfileAction),
        switchMap(({data, id}) => {
          return this.profileService.updateUser(data, id).pipe(map(() => {
              return updateProfileSuccessAction({data, id})
            }),
            catchError(() => {
              return of(registerFailureAction());
            })
          )
        })
      )
  }
  );

  constructor(private actions$: Actions, private profileService: ProfileService) {
  }
}
