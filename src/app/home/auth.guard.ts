import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {Inject, Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {isLoggedIn} from 'src/app/auth/store/selectors';

@Injectable()
export class AuthGuard
  implements CanActivate, CanLoad {
  isLoggedIn$: Observable<boolean>;
  isLogged = false;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedIn$.subscribe((isLoggedIn) => this.isLogged = isLoggedIn);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.isLogged) {
      this.router.navigate(['login']);
    }
    return this.isLogged;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.isLogged) {
      this.router.navigate(['login']);
    }
    return this.isLogged;
  }
}
