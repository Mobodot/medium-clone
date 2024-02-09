import { createActionGroup, props } from '@ngrx/store';
import { ArticleInterface } from '../../shared/types/article.interface';
import { ArticleRequestInterface } from '../../shared/types/articleRequest.interface';
import { BackendErrorsInterface } from '../../shared/types/backendError.interface';

export const createArticleActions = createActionGroup({
  source: 'createarticle',
  events: {
    'create article': props<{ request: ArticleRequestInterface }>(),
    'create article Success': props<{ article: ArticleInterface }>(),
    'create article Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
