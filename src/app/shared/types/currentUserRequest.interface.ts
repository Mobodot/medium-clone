import { CurrentUserInterface } from './currentUser.interface';

export interface CurrentUserRequestInterface {
  currentUser: CurrentUserInterface & { password: string };
}
