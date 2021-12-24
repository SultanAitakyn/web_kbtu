import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean,
  user: CurrentUserInterface | null,
  isLoggedIn: boolean
}
