import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { AuthService } from '../../service/auth.service';
import { authActions } from '../../store/actions';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessages,
    RouterLink,
  ],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginRequestInterface>,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    console.log('form: ', this.form.getRawValue());
    const request: LoginRequestInterface = { user: this.form.getRawValue() };
    this.authService.login(request);
    this.store.dispatch(authActions.login({ request }));
  }
}
