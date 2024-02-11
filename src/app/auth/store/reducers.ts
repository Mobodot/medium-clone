import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isloading: false,
  currentUser: undefined,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),

    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),

    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(authActions.getCurrentUser, (state) => ({
      ...state,
      isloading: true,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isloading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFailure, (state) => ({
      ...state,
      isloading: false,
      currentUser: null,
    })),

    on(authActions.updateCurrentUserSuccess, (state, action) => ({
      ...state,
      currentUser: action.currentUser,
    })),
    on(authActions.logout, (state) => ({
      ...state,
      ...initialState,
      currentUser: null,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsloading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
