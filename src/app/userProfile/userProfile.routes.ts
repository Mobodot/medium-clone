import { Route } from '@angular/router';
import { UserProfileComponent } from './components/userProfile.component';
import { UserProfileService } from './services/userProfile.service';
import { provideState } from '@ngrx/store';
import { userProfileFeatureKey, userProfileReducer } from './types/reducers';
import { provideEffects } from '@ngrx/effects';
import * as getUserProfileEffects from './store/effects';

export const userProfileRoutes: Route[] = [
  {
    path: '',
    component: UserProfileComponent,
    providers: [
      UserProfileService,
      provideState(userProfileFeatureKey, userProfileReducer),
      provideEffects(getUserProfileEffects),
    ],
  },
];
