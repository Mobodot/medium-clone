import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideRouterStore } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import { authInterceptor } from './shared/services/authInterceptor';
import { feedFeatureKey, feedReducer } from './shared/store/reducers';
import {
  popularTagsFeatureKey,
  popularTagsReducer,
} from './shared/components/popularTags/store/reducers';
import * as authEffects from './auth/store/effects';
import * as feedEffects from './shared/store/effects';
import * as popularTagsEffects from './shared/components/popularTags/store/effects';
import * as addToFavoriteEffects from './shared/components/addToFavorite/store/effects';
import { AddToFavoriteService } from './shared/components/addToFavorite/services/addToFavorite.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideEffects(
      authEffects,
      feedEffects,
      popularTagsEffects,
      addToFavoriteEffects
    ),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    AddToFavoriteService,
  ],
};
