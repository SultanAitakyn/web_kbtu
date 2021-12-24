import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';

import {registerAction} from 'src/app/auth/store/actions';
import {Observable} from 'rxjs';
import {isSubmittingSelector} from 'src/app/auth/store/selectors';
import {AuthService} from 'src/app/auth/services/auth.service';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';

@Component({
  selector: 'kbtu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>

  constructor(private fb: FormBuilder,
              private store: Store, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  handleSubmit(): void {
    const request: RegisterRequestInterface = {
      ...this.form.value,
      favourites: []
    }
    this.store.dispatch(registerAction({request}));
  }
}
