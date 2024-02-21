import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authentService:AuthenticationService = inject(AuthenticationService);
  const router=inject(Router);


  if(authentService.isAuthenticated){
    return true
  }
  return router.parseUrl('/login');
};
