import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {
  public label = new ReplaySubject<any>();
  public goal = new ReplaySubject<any>();
  public loggedIn = new ReplaySubject<boolean>();
  public userStatus = new ReplaySubject<boolean>();
  constructor() { }

  setLabel(value) {
    this.label.next(value);
  }

  getLabel() {
    return this.label.asObservable();
  }

   /**
   * Getter method for getting Logged In status
   */
  getLoggedInStatus() {
    return this.loggedIn.asObservable();
  }

  /**
   * Setter method to set Logged In status
   * @param value
   */
  setLoggedInStatus(value) {
    this.loggedIn.next(value);
  }

  setSmartGoal(value) {
    this.goal.next(value);
  }

  getSmartGoal() {
    return this.goal.asObservable();
  }

  setUser(value) {
    this.userStatus.next(value);
  }

  getUser() {
    return this.userStatus.asObservable();
  }

}
