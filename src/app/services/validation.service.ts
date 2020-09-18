import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {


  static account_validation_messages: any = {
'first_name': [
{ type: 'required', message: 'First Name is required' },
{ type: 'minlength', message: 'Username must be at least 5 characters long' },
{ type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
{ type: 'pattern', message: 'Your username must contain only numbers and letters' },
{ type: 'validUsername', message: 'Your username has already been taken' }],

'email': [
{ type: 'required', message: 'Email is required' },
{ type: 'pattern', message: 'Enter a valid Email' },
{ type: 'emailValidator', message: 'Enter a valid email' },
],
'password': [ { type: 'required', message: 'Password is required' },
{ type: 'pattern', message: 'Enter a valid password' },
{ type: 'emailValidator', message: 'Enter a valid password' },
{ type: 'minlength', message: 'Password must be at least 6 characters long' },
],

'last_name': [
{ type: 'required', message: 'Last Name is required' },
{ type: 'pattern', message: 'Last Name should contain alphabets only' },
{ type: 'numberNotRequiredValidator', message: 'Last Name should not contain numbers.' },
{ type: 'avoidEmptyStrigs', message: 'Last Name should not be empty string.' },
{ type: 'nameValidator', message: 'Enter a valid name' },
],

'item_code': [
{ type: 'required', message: 'Item Code is required' },
{ type: 'pattern', message: 'Invalid Code' },
],
'name': [
{ type: 'required', message: 'Category Name is required' },
{ type: 'maxlength', message: 'Name cannot be more than 30 characters long' },
],
'description': [
{ type: 'required', message: 'Description is required' },
{ type: 'pattern', message: 'Invalid ' },
],
'quantity': [
{ type: 'required', message: 'Quantity is required' },
],
'length': [
{ type: 'required', message: 'required' },
],
'width': [
{ type: 'required', message: 'required' },
],
'height': [
{ type: 'required', message: 'required' },
],
'dimension_unit': [
{ type: 'required', message: 'required' },
],
'weight_value': [
{ type: 'required', message: 'required' },
],
'weight_unit': [
{ type: 'required', message: 'required' },
],
'category': [
{ type: 'required', message: 'Category is required' },
],
'unit': [
{ type: 'required', message: 'unit is required' },
],
'price': [
{ type: 'required', message: 'Price is required' },
{ type: 'pattern', message: 'Invalid Price' },
],
'color': [
{ type: 'required', message: 'Color is required' },
],
'postcode': [
{ type: 'required', message: 'Post code is required' },
],
'city': [
{ type: 'required', message: 'City is required' },
],
'state': [
{ type: 'required', message: 'State is required' },
],
'street_name': [
{ type: 'required', message: 'Street name is required' },
],
'street_2': [
{ type: 'required', message: 'Street 2 is required' },
],
'phone_number': [
{ type: 'required', message: 'Phone No is required' },
],
'building_name_no': [
{ type: 'required', message: 'Building Name or Number is required' },
],
'address': [
{ type: 'required', message: 'Address Name is required' },
],
'town': [
{ type: 'required', message: 'Town is required' },
],
'coupon_code': [
  { type: 'required', message: 'please enter coupon code.' },
  ],
  'card_no': [
    { type: 'required', message: 'please enter card number.' },
    ],
    'expiry_month': [
      { type: 'required', message: 'please enter card expiry month.' },
      ],
      'expiry_year': [
        { type: 'required', message: 'please enter card expiry year.' },
        ],
        'name_on_card': [
          { type: 'required', message: 'please enter name.' },
          ],
    }
    static numberNotRequiredValidator(number): any {
      if (number.pristine) {
        return null;
      }
      const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;

      number.markAsTouched();

      const value = number.value.trim();

      if (NUMBER_REGEXP.test(value)) {
        return {
          numberNotRequiredValidator: true
        };
      }

      return null;
    }

    static percentValidation(number): any {
      if (number.pristine) {
        return null;
      }
      number.markAsTouched();
      // tslint:disable-next-line:prefer-const
      // tslint:disable-next-line:radix
      const temp_number = parseInt(number.value)
      if ((temp_number > 100) || (temp_number < 0)) {
        return {
          percentValidation: true
        }
      } else {
        return null
      }
    }

    static avoidEmptyStrigs(value): any {
      if (value.pristine) {
        return null;
      }

      value.markAsTouched();

      if (value.value.trim() === '' && value.value.length > 0) {
        return {
          avoidEmptyStrigs: true
        };
      }

      return null;
    }

    static emailValidator(value): any {

      if (value.pristine) {
        return null;
      }

      if (value.value.length === 0) {
        return;
      }


      const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      value.markAsTouched();

      if (EMAIL_REGEXP.test(value.value)) {
        return null;
      }

      return {
        emailValidator: true
      };
    }

    static nameValidator(value): any {

      if (value.pristine) {
        return null;
      }

      if (value.value.length === 0) {
        return;
      }


      const EMAIL_REGEXP = /^[^\s]+$/;

      value.markAsTouched();

      if (EMAIL_REGEXP.test(value.value)) {
        return null;
      }

      return {
        namelValidator: true
      };
    }
}
