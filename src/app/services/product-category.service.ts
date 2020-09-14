import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  public apiUrl: string = environment.url;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url;
  }

     /*
  * API for Get Category List
  *
  */
 getCategoryList(userId) {
  return this.http.post(this.apiUrl + '/api/getcategory_list', userId);
}

}
