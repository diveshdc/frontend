import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { ROUTER_CONFIGURATION } from '@angular/router';
import { GetterSetterService } from './getter-setter.service';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // public getLoggedInName = new Observable();

  public apiUrl = 'localhost:8000';
  constructor( private http: HttpClient, public router: Router, private getSetService: GetterSetterService) {
 this.apiUrl = 'http://127.0.0.1:8000'; 
   }


   /*
  * API for Manage Users
  *
  */
  getUser() {
    return this.http.get(this.apiUrl + '/api/user');
  }
   /*
  * API for Manage Users
  *
  */
//  getUserById() {
//   return this.http.get(this.apiUrl + '/api/user');
// }

getOrderHistory(userId) {
  return this.http.post(this.apiUrl + '/api/getcurrentorders', userId);
}

getCartItems(userId) {
  return this.http.get(this.apiUrl + `/api/getcart_item/${userId}`);
}

  userLogout() {
    return this.http.get(this.apiUrl + '/api/auth/logout');
  }

  addCardToPay(cardInfo) {
    return this.http.post(this.apiUrl + '/api/addcarddetails', cardInfo);
  }

  login(loginData) {
    return this.http.post(this.apiUrl + '/api/login', loginData);
  }

  logout() {
    return this.http.get(this.apiUrl + '/api/logout');
  }


  getData () {
    return JSON.parse(localStorage.getItem('la_user_token'));
}

  applyCoupon(couponData) {
    return this.http.post(this.apiUrl + '/api/applycoupon', couponData);
  }

  resetPassword(data) {
    return this.http.post(this.apiUrl + '/api/resetpassword', data);
  }

  checkPostCode(postCode) {
    return this.http.post(this.apiUrl + '/api/checkPostCode', postCode);
  }

  getTimeSlot(date) {
    return this.http.post(this.apiUrl + '/api/gettimeslot', date);
  }
  checkOut(checkoutData) {
    return this.http.post(this.apiUrl + '/api/chargeorder', checkoutData);
  }

  updateAddress(payload) {
    return this.http.post(this.apiUrl + '/api/updateaddress', payload);
  }


  postcodeRequest(payload) {
    return this.http.post(this.apiUrl + '/api/postcode_request', payload);
  }

  removeItems(id) {
    return this.http.post(this.apiUrl + '/api/removeitems', id);
  }
  removeToken() {
    localStorage.removeItem('la_user_token');
    localStorage.removeItem('la_user_token_data');
  }

  getCoupon() {
    return this.http.get(this.apiUrl + '/api/getcoupons');
  }

  /**
   * Function to show toastr message
   * @param status
   * @param summary
   * @param detail
   */
  async showToastrMessage(status, summary, detail) {
    // await this.messageService.add({
    //   severity: status,
    //   summary: summary,
    //   detail: detail
    // });
  }



  maintainStatus() {
    const userData = JSON.parse(localStorage.getItem('la_user_token_data'));
    if (userData != null) {
       this.getSetService.setLoggedInStatus(true);
    } else {
       this.getSetService.setLoggedInStatus(false);
    }
 }


}
