import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { Subscription, combineLatest, filter } from 'rxjs';
import { initialize } from 'esbuild';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { CurrentUserRequestInterface } from '../../../shared/types/currentUserRequest.interface';
import { authActions } from '../../../auth/store/actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [CommonModule, BackendErrorMessages, ReactiveFormsModule],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form = this.fb.nonNullable.group({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  currentUser?: CurrentUserInterface;
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });
  currentUserSubscription?: Subscription;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.store
      .pipe(select(selectCurrentUser), filter(Boolean))
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }

  initializeForm(): void {
    if (!this.currentUser) {
      throw new Error('current user is not set');
    }
    this.form.patchValue({
      image: this.currentUser.image ?? '',
      username: this.currentUser.username,
      bio: this.currentUser.bio ?? '',
      email: this.currentUser.email,
      password: '',
    });
  }

  submit(): void {
    if (!this.currentUser) {
      throw new Error('current user is not set');
    }
    const currentUserRequest: CurrentUserRequestInterface = {
      currentUser: {
        ...this.currentUser,
        ...this.form.getRawValue(),
      },
    };
    this.store.dispatch(authActions.updateCurrentUser({ currentUserRequest }));
  }

  logout(): void {
    this.store.dispatch(authActions.logout());
  }
}
