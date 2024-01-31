import { BackendErrorsInterface } from '../../shared/types/backendError.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isloading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
