import { createFeature, createReducer, on } from '@ngrx/store';
import { UserProfileStateInterface } from './userProfileState.interface';
import { userProfileActions } from '../store/actions';

const initialState: UserProfileStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

const userProfileFeature = createFeature({
  name: 'user profile',
  reducer: createReducer(
    initialState,
    on(userProfileActions.getUserProfile, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(userProfileActions.getUserProfileSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })),
    on(userProfileActions.getUserProfileFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});

export const {
  name: userProfileFeatureKey,
  reducer: userProfileReducer,
  selectIsLoading,
  selectData: selectUserProfileData,
  selectError,
} = userProfileFeature;
