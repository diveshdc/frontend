import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/services/validation.service';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  moduleId: module.id,
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  post_code: String = '';
  informationForm: FormGroup;
  public account_validation_messages = ValidationService.account_validation_messages;
  userId: any;
  CartItemsData: any;
  totalItems: any;
  totalPrice: any;
  constructor(private formBuilder: FormBuilder, private authservice: AuthService, private route: Router, private toastr: ToastrService) {
    this.informationForm = this.formBuilder.group({
      email: ['', [Validators.required,
                   Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'),
                   ValidationService.avoidEmptyStrigs]
                  ],
      password : ['', [Validators.required, Validators.minLength(6)]],
      postcode : ['', [Validators.required]],
      address : ['', [Validators.required]],
      new_password : ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation : ['', [Validators.required, Validators.minLength(6)]],
      first_name : ['', [Validators.required]],
      last_name : ['', [Validators.required]],
      phone_number : ['', [Validators.required, Validators.minLength(10)]],
      street_name : ['', [Validators.required]],
      town : ['', [Validators.required]],
      building_name_no : ['', [Validators.required]],
      });
   }

  ngOnInit(): void {
    this.getUserData();
  }


  getUserData() {
    this.authservice.getUser().subscribe(async res => {
      if (res['status'] === true) {
        this.userId = res['data'].id
        this.informationForm.patchValue(res['data'])
        this.getCartItems(res['data'].id);
      } else {

      }
    }, (error) => {
      this.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
    })
  }

  getCartItems(userId) {
    this.authservice.getCartItems(userId).subscribe(async res => {
      if (res['status'] === true) {
            this.CartItemsData = res['CartData'];
              this.totalItems = res['quantity_count'];
              this.totalPrice = 0;
              res['CartData'].forEach(element => {
                let total = 0;
                for (let i = 0; i < element.price.length; i++) {
                  total += element.price[i];
                }
                this.totalPrice = total;
              });
      } else {

      }
    }, (error) => {
      this.toastr.error(error.error.message, 'Spotlex');
    })
  }

  // totalItemsPrice(votes) {
  //    console.log(votes, 'asdsadsdgaskdgak')

  // }

  EditAddress() {
    this.authservice.updateAddress(this.informationForm.value).subscribe(async res => {
      if (res['status'] === true) {
        this.toastr.success(res['message'], 'Update Address!');
      } else {
        this.toastr.error(res['message'], 'Update Address!');
      }
    }, (error) => {
      this.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
    })
  }

  goToCheckout(): void {
    // this.route.navigate(['/ckeckout', this.totalPrice]);
    this.route.navigate(['/checkout']);
}

checkPostCode() {
  this.authservice.checkPostCode({post_code: this.post_code}).subscribe(async res => {
    if (res['status'] === true) {
      this.toastr.success(res['message'], 'Spotlex');
      this.informationForm.patchValue({
       address: res['data'].full_address,
       street_name: res['data'].route,
       town: res['data'].postal_town,
      });
    } else {

    }
  }, (error) => {
    this.toastr.error(error.error.message, 'Update Address!');
  })
}

removeItem(id, i) {
  console.log(id, 'datadatadatadatadatadata');
  this.authservice.removeItems({id: id}).subscribe(async res => {
    if (res['status'] === true) {
          this.CartItemsData = res['CartData'];
            this.totalItems = res['quantity_count'];
            this.totalPrice = 0;
            res['CartData'].forEach(element => {
              let total = 0;
              // tslint:disable-next-line:no-shadowed-variable
              for (let i = 0; i < element.price.length; i++) {
                total += element.price[i];
              }
              this.totalPrice = total;
            });
    } else {

    }
  }, (error) => {
    this.toastr.error(error.error.message, 'Update Address!');
  })
}

  goBack() {
    window.history.go(-1); return false;
  }
}
