import { BackendErrorsInterface } from '../../shared/types/backendError.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
