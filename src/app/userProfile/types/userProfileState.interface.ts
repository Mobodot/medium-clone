import { UserProfileInterface } from './userProfile.interface';

export interface UserProfileStateInterface {
  isLoading: boolean;
  error: null;
  data: null | UserProfileInterface;
}
