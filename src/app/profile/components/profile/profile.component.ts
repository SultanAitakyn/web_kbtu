import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {userSelector} from 'src/app/auth/store/selectors';
import {updateProfileAction} from 'src/app/auth/store/actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'date', 'status'];
  form!: FormGroup;
  currentDate = new Date();
  currentUser: CurrentUserInterface | null = null;
  mockedDataSource = [
    {
      name: 'Sultan',
      price: '299',
      date: this.currentDate.toLocaleDateString() + ' ' + this.currentDate.toLocaleTimeString(),
      status: 'success'
    }
  ];

  constructor(private fb: FormBuilder, private store: Store) {
    const user = this.store.pipe(select(userSelector));
    user.subscribe((curUser) => this.currentUser = curUser);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: [''],
      username: ['']
    })
    if (this.currentUser) {
      this.form.patchValue(this.currentUser);
    }
  }

  submitUpdate() {
    let data: any = {};
    if (this.form.value.email.trim() != '') data['email'] = this.form.value.email.trim();
    if (this.form.value.password.trim() != '') data['password'] = this.form.value.password.trim();
    if (this.form.value.username.trim() != '') data['username'] = this.form.value.username.trim();

    this.store.dispatch(updateProfileAction({data, id: this.currentUser!.id}));
  }

}
