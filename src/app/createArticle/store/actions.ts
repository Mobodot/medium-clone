import { createActionGroup, props } from '@ngrx/store';
import { ArticleRequestInterface } from '../../shared/types/articleRequest.interface';
import { BackendErrorsInterface } from '../../shared/types/backendError.interface';
import { ArticleInterface } from '../../shared/types/article.interface';

export const createArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Create Article': props<{ request: ArticleRequestInterface }>(),
    'Create Article Success': props<{ article: ArticleInterface }>(),
    'Create Article Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
