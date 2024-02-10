import { ArticleInterface } from '../../shared/types/article.interface';
import { BackendErrorsInterface } from '../../shared/types/backendError.interface';

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
