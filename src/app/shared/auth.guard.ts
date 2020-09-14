import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const token = localStorage.getItem('la_user_token');
      if (!token) {
        this.router.navigate(['/login']);
      } else {
        return true;
      }
    } catch (err) {
      this.router.navigate(['/login']);
    }
  }

}
