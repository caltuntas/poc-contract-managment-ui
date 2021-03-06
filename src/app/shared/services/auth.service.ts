import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(userName: string, password: string) {
    if (userName !== '' && password !== '' ) {
      this.loggedIn.next(true);
      localStorage.setItem('currentUser', userName);
      this.router.navigate(['/processlist']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
