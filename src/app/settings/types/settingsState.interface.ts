import { BackendErrorsInterface } from '../../shared/types/backendError.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
