import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from '../../shared/types/article.interface';
import { ArticleRequestInterface } from '../../shared/types/articleRequest.interface';
import { BackendErrorsInterface } from '../../shared/types/backendError.interface';

export const editArticleActions = createActionGroup({
  source: 'edit article',
  events: {
    'Get article': props<{ slug: string }>(),
    'Get article Success': props<{ article: ArticleInterface }>(),
    'Get article Failure': emptyProps(),

    'update article': props<{
      request: ArticleRequestInterface;
      slug: string;
    }>(),
    'update article Success': props<{ article: ArticleInterface }>(),
    'update article Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
