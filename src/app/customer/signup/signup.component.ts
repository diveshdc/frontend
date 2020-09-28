import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { ValidationService } from 'app/services/validation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userSignupForm: FormGroup;
  public account_validation_messages = ValidationService.account_validation_messages;
  constructor(private formBuilder: FormBuilder,
              private authservice: AuthService,
              private route: Router,
              private toastr: ToastrService) {
    this.userSignupForm = this.formBuilder.group({
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

  }

  signUp() {
    if (this.userSignupForm.invalid) {
      this.validateAllFormFields(this.userSignupForm);
      return true;
    } else {
      this.authservice.login(this.userSignupForm.value).subscribe(async res => {
        if (res['status'] === true) {
          this.toastr.success(res['message'], 'Spotlex');
        } else {
          this.toastr.error(res['message'], 'Spotlex');
        }
      }, (error) => {
        this.toastr.error(error.error.message, 'spotlex');
      })
    }
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

}
