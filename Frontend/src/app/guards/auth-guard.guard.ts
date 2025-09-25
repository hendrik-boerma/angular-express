import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = () => {
  const router = new Router();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true;
  } else {
   router.navigate([''])
   return false;
  }
};

export const loginPageGuard: CanActivateFn = () => {
  const router = new Router();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  
  if (isLoggedIn) {
  router.navigate(['/dashboard']);
  return false;
  } else {
    return true;
  }
};
