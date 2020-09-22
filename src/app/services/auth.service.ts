import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
// import { MessageService } from 'primeng/api';
import { ROUTER_CONFIGURATION } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl = 'http://3.11.134.243';
  constructor( private http: HttpClient) {
    this.apiUrl = 'http://3.11.134.243';
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

  applyCoupon(couponData) {
    return this.http.post(this.apiUrl + '/api/applycoupon', couponData);
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

  removeItems(id) {
    return this.http.post(this.apiUrl + '/api/removeitems', id);
  }
  removeToken() {
    localStorage.removeItem('la_user_token');
    localStorage.removeItem('la_user_token_data');
  }

  getCoupon() {
    return this.http.get(this.apiUrl + '/api/getcoupons/');
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
}
