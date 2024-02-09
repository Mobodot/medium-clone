import { Route } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { provideState } from '@ngrx/store';
import { articleFeatureKey, articleReducer } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import * as getArticleEffects from './store/effects';
import { ArticleService } from './services/article.service';

export const articleRoutes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideState(articleFeatureKey, articleReducer),
      provideEffects(getArticleEffects),
      ArticleService,
    ],
  },
];
