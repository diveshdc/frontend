import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  public apiUrl = 'localhost:8000';
  constructor( private http: HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000';
   }

     /*
  * API for Get Category List
  *
  */
 getCategoryList(userId) {
  return this.http.post(this.apiUrl + '/api/getcategory_list', userId);
}
}
