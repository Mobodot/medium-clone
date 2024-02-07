import { createFeature, createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';
import { popularTagsActions } from './actions';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

const popularTagsFeature = createFeature({
  name: 'Popular Tags',
  reducer: createReducer(
    initialState,
    on(popularTagsActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(popularTagsActions.getPopularTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })),
    on(popularTagsActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectData: selectPopularTagsData,
  selectError,
} = popularTagsFeature;
