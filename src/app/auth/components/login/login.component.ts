import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AuthService} from 'src/app/auth/services/auth.service';
import {isLoggedIn, isSubmittingSelector} from 'src/app/auth/store/selectors';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {loginAction, registerAction} from 'src/app/auth/store/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  isLoggedIn$!: Observable<boolean>;

  constructor(private fb: FormBuilder,
              private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['']);
      }
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  }

  handleSubmit(): void {
    const request: RegisterRequestInterface = {
      ...this.form.value
    }
    this.store.dispatch(loginAction({request}));
  }
}
