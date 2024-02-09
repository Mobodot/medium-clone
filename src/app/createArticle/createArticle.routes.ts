import { Route } from '@angular/router';
import { CreateArticleComponent } from './createArticle.component';
import { provideEffects } from '@ngrx/effects';
import * as createArticleEffects from './store/effects';
import { provideState } from '@ngrx/store';
import {
  createArticleFeatureKey,
  createArticleReducer,
} from './store/reducers';

export const createArticleRoutes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      provideEffects(createArticleEffects),
      provideState(createArticleFeatureKey, createArticleReducer),
    ],
  },
];
