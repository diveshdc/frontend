import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'app/services/validation.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // private stripe: Stripe;
  public delivery_notes;
  public value;
  public minDate;
  public maxDate;
  public account_validation_messages = ValidationService.account_validation_messages;
  userId: any;
  finalPrice: number;
  couponForm: FormGroup;
  AddCardForm: FormGroup;
  displayCollection: boolean;
  displayDelivery: boolean;
  isCouponCode: Boolean = false;
  deliverySlotId: any;
  collectionSlotId: any;
  deliveryTime: any;
  addCard: any;
  collectionDate: any;
  collectionTime: any;
  deliveryDate: any;
  isSkipItem: string;
  collectionSlot: any;
  deliverySlot: any;
  setDeliverySlotValue: string;
  setCollectionSlotValue: string;
  deliveryDateTime: string;
  collectionDateTime: string;
  cardToken: any;
  skipItemSelection: Boolean = false;
  constructor(private formBuilder: FormBuilder,
    private authservice: AuthService,
    private route: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    ) {
    this.minDate = new Date();
    this.value = new Date();
    this.couponForm = this.formBuilder.group({
      coupon_code: ['', [Validators.required]]
      });

      this.AddCardForm = this.formBuilder.group({
        name_on_card: ['', [Validators.required]],
        card_no: ['', [Validators.required]],
        expiry_month: ['', [Validators.required]],
        expiry_year: ['', [Validators.required]],
        cvv: ['', [Validators.required]],
        });

  }

  ngOnInit(): void {
    const skipItemSelection = this.activatedRoute.snapshot.params.skip;
    if (skipItemSelection) {
      this.isSkipItem = atob(skipItemSelection);
      this.skipItemSelection = true
      this.finalPrice = 15;
    }
    this.getUserData();
  }

    /**
   * Function to validate all form fields
   * @param formGroup
   */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
  }


  getUserData() {
    this.authservice.getUser().subscribe(async res => {
      if (res['status'] === true) {
        this.userId = res['data'].id
        this.getPrice(res['data'].id);
      } else {

      }
    }, (error) => {
      this.toastr.error(error.error.message, 'Spotlex!');
    })
  }

  getPrice(userId) {
    this.authservice.getCartItems(userId).subscribe(async res => {
      if (res['status'] === true) {
              this.finalPrice = 0;
              res['CartData'].forEach(element => {
                let total = 0;
                for (let i = 0; i < element.price.length; i++) {
                  total = element.price;
                }
                this.finalPrice = total;
              });
      } else {

      }
    }, (error) => {
      this.toastr.error(error.error.message, 'Spotlex!');
    })
  }

  applyCoupon() {
    if (this.couponForm.invalid) {
      this.validateAllFormFields(this.couponForm);
      return true;
    } else {
      this.isCouponCode = this.couponForm.value.coupon_code;
      this.authservice.applyCoupon({'couponcode': this.couponForm.value, 'actual_price': this.finalPrice}).subscribe(async res => {
        if (res['status'] === true) {
          // tslint:disable-next-line:radix
          this.finalPrice = this.finalPrice - parseInt(res['couponData'].discount);
          this.isCouponCode = true;
          this.toastr.success(res['message'], 'Spotlex!');

        } else {
          this.isCouponCode = false;
          this.toastr.error(res['message'], 'Spotlex!');
        }
      }, (error) => {
        this.toastr.error(error.error.message, 'Spotlex!');
      })
  }
}

onDateSelected(e, type) {
  const newDate = e.toLocaleDateString();
  if (type === 0) {
    this.collectionDateTime = e;
    this.displayDelivery = false;
    this.authservice.getTimeSlot({collection_date: newDate}).subscribe(async res => {

   if (res['status'] === true) {
     this.collectionSlot = res['timeslot']
     this.displayCollection = true;
    } else {

      }
    }, (error) => {
      this.toastr.error(error.error.message, 'Spotlex!');
    })
  } else {
    this.deliveryDateTime = e;
    this.displayCollection = false;
    this.authservice.getTimeSlot({delivery_date: newDate}).subscribe(async res => {
      if (res['status'] === true) {
        this.deliverySlot = res['timeslot'];
        this.displayDelivery = true;
      } else {

      }
    }, (error) => {
      this.toastr.error(error.error.message, 'Spotlex!');
    })
  }
}

addCardDetails() {
  if (!this.deliveryDate || !this.collectionDate) {
    this.toastr.error('Please select Collection date and time or Delivery date and time', 'Spotlex!');
    return;
  } else {
  this.addCard = true;
  }
}
addCardToPay() {
  if (this.AddCardForm.invalid) {
    this.validateAllFormFields(this.AddCardForm);
    return true;
  } else {
    this.authservice.addCardToPay(this.AddCardForm.value).subscribe(async res => {
      if (res['status'] === true) {
        this.cardToken = res['card_token'];
        this.toastr.info('please wait... do not refresh and back your browser!', 'Spotlex!');
        this.checkOut();
      } else {
        this.toastr.error(res['message'], 'Spotlex!');
      }
    }, (error) => {
      this.toastr.error(error.error.message, 'Spotlex!');
    })
  }
}

checkOut() {
  const payLoad = {
    'is_couponcode': this.isCouponCode,
    'card_token': this.cardToken,
    'cleaningInstructions': this.delivery_notes,
    'delivery_notes': this.delivery_notes,
    'delivery_slot_id': this.deliverySlotId,
    'collection_slot_id': this.collectionSlotId,
    'delivery_time': this.deliveryTime,
    'delivery_date': this.deliveryDate,
    'collection_time': this.collectionTime,
    'collection_date': this.collectionDate,
    'user_id': this.userId,
    'final_price': this.finalPrice,
    'actual_price': this.finalPrice,
    'couponcode' : this.isCouponCode ? this.isCouponCode : '',
    'is_skip_items' : this.skipItemSelection
  }
  console.log(payLoad, 'payLoadpayLoadpayLoadpayLoadpayLoadpayLoad')
  this.authservice.checkOut(payLoad).subscribe(async res => {
    if (res['status'] === true) {
      this.addCard = false;
      this.toastr.success(res['message'], 'Spotlex!');
    } else {
      this.toastr.error(res['message'], 'Spotlex!');
    }
  }, (error) => {
    this.toastr.error('error', 'Spotlex', error.error.message);
  })
}

selectedCollectionSlot(slotData) {
  console.log(slotData, 'poiutghfxhsfdhsagfdhasdfashgdfashdagfsdhgadasd');
  if (slotData.blocked_collection_slot === 0) {
    this.collectionSlotId = slotData.id;
    this.setCollectionSlotValue = slotData.collection_time_start + '-' +  slotData.collection_time_end;
    this.collectionDate = slotData.collection_date;
    this.collectionTime = slotData.collection_time_start + '-' + slotData.collection_time_end;
    }
  if (slotData.blocked_collection_slot === 1) {
    alert('this timeslot is not available');
  }
}

selectedDeliverySlot(slotData) {
  console.log(slotData, 'poiutghfxhsfdhsagfdhasdfashgdfashdagfsdhgadasd');
  if (slotData.blocked_delivery_slot === 0) {
    this.setDeliverySlotValue = slotData.delivery_time_start + '-' +  slotData.delivery_time_end;
    this.deliveryDate = slotData.collection_date;
    this.deliveryTime = slotData.collection_time_start + '-' + slotData.collection_time_end;
    this.deliverySlotId = slotData.id;
  }
  if (slotData.blocked_delivery_slot === 1) {
    alert('this timeslot is not available');
    return;
  }
}
  goBack() {
    window.history.go(-1); return false;
  }

}
