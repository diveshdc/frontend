import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../../services/product-category.service';
import { PriceService } from '../../services/price.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  categories: []
  productOfCategory: any;
  userData: any;
  quantity: any = 0;
  selectedCategory: any;
  totalAmount: any = 0;
  badgeCount: any;
  userId: any;
  quantityCount: any;
  showSpkiItemDiv: Boolean = false;
  minValue = 15;
  userDetails: any;
  constructor(
      private productCategoryService: ProductCategoryService,
      private priceservice: PriceService,
      private authservice: AuthService,
      private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.totalCartTotal();
  }

  totalCartTotal() {
    this.userDetails = JSON.parse(localStorage.getItem('la_user_token_data'));
    this.productCategoryService.getTotalcartCount({'user_id': this.userDetails.id}).subscribe(res => {
      if (res['status'] == 'success') {
         this.totalAmount = res['data'];
      } else {

      }
    })
  }

  onScroll(e) {
    if (this.productOfCategory.length >= 100) {
      console.log('No more items');
      return;
    }
    // console.log('scrolled!!', e);
    // const moreProducts = ti
    // this.productOfCategory = [...this.productOfCategory, ...moreProducts];
  }

  getUserData() {
    this.authservice.getUser().subscribe(async res => {
      if (res['status'] === true) {
          this.userData = res['data'];
          this.userId = res['data'].id;
          this.getCategoryList();
      } else {
        console.log(res);
      }
    }, (error) => {
      console.log('error', 'Spotlex', error.error.message);
    })
  }

  getCategoryList() {
    const payload = {
      user_id: this.userData['id'],
    }
    this.productCategoryService.getCategoryList(payload).subscribe(async res => {
      if (res['status'] === true) {
        this.quantityCount = res['quantity_count'];
        if (this.quantityCount.length > 0) {
          this.showSpkiItemDiv = true;
        }
        this.categories = res['categoriesArray'];
        for (let i = 0; i < res['categoriesArray'].length; i++) {
          const obj = res['categoriesArray'][i];
          if (i === 0 ) {
            this.getProductByCatId(obj.id)
          }
      }
      } else {
        console.log(res);
      }
    }, (error) => {
      console.log('error', 'Spotlex', error.error.message);
    })
  }

  getProductByCatId(id) {
    this.selectedCategory = id;
    this.categories.forEach((element) => {
      if (element['id'] === id) {
        this.productOfCategory = element['category_product']['data'];
      }
    })
    }

    skipItem() {
      this.router.navigate(['/checkout', btoa('skipItem')]);
    }

    getQuantity(productId, userId) {
      console.log(this.quantityCount);
      if (this.quantityCount.length <= 0 || this.quantityCount.length === '') {
        this.showSpkiItemDiv = false;
      }
      const result = this.quantityCount.filter(element => {
       if (element.product_id === productId ) {
        return true;
       }
      });
      return result[0] ? result[0].quantity : 0
    }

    addToCart(product, value) {
      this.quantity = this.getQuantity(product.id, this.userId)
      // if (this.quantity && this.quantity > 0) {
        if (value === 'plus') {
          this.quantity = this.quantity + 1;
        }
        if (value === 'minus') {
          this.quantity = this.quantity - 1;
        }
      // }

      const payLoad = {
        'user_id': this.userData.id,
        'product_id': product.id,
        'name': product.name,
        'price': product.price,
        'sale_price': product.sale_price ? product.sale_price : 0,
        'quantity': this.quantity,
        'category_id': this.selectedCategory,
        'description': product.description,
        'image': product.image,
      }
      console.log(payLoad);

      this.priceservice.addToCart(payLoad).subscribe(async res => {
        if (res['status'] === true) {
          console.log(res);
          this.getCategoryList();
          this.totalCartTotal();
          if (res['CartItem'].length >= 0) {
            this.showSpkiItemDiv = false;
          } else {
            this.showSpkiItemDiv = true;
          }
          this.badgeCount = res['CartItem'].quantity;
          const index = this.quantityCount.findIndex(item => item.product_id === product.id)
          if (index <= 0) {
            const prod = {
              'product_id': product.id,
              'category_id': this.selectedCategory,
              'quantity': this.quantity
            }
            this.quantityCount.push(prod)
          } else {
            this.quantityCount[index].quantity = this.quantity
          }
          this.quantity = 0;
        } else {

        }
      }, (error) => {

      })
    }
}
