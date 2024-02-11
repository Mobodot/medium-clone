import { createFeature, createReducer, on } from '@ngrx/store';
import { SettingsStateInterface } from '../types/settingsState.interface';
import { authActions } from '../../auth/store/actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialstate: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialstate,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(authActions.updateCurrentUserFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialstate)
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectValidationErrors,
  selectIsSubmitting,
} = settingsFeature;
