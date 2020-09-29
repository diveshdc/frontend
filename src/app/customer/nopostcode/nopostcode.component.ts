import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/services/validation.service';

import { AuthService } from 'app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nopostcode',
  templateUrl: './nopostcode.component.html',
  styleUrls: ['./nopostcode.component.css']
})
export class NopostcodeComponent implements OnInit {
  public noPostCodeForm: FormGroup;
  public account_validation_messages = ValidationService.account_validation_messages;

  constructor(private formBuilder: FormBuilder,
    private authservice: AuthService,
    private route: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.noPostCodeForm = this.formBuilder.group({
      email: ['', [Validators.required,
                  Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'),
                  ValidationService.avoidEmptyStrigs]],
                  post_code : ['', [Validators.required]]
      });
  }


  postCodeRequest() {
    if (this.noPostCodeForm.invalid) {
      this.validateAllFormFields(this.noPostCodeForm);
      return true;
    }
    this.authservice.postcodeRequest(this.noPostCodeForm.value).subscribe(async res => {
      if (res['status'] === true) {
        this.toastr.success(res['message'], 'Spotlex');

          this.route.navigate(['']);
      } else if (res['status'] === false) {
        this.toastr.error(res['message'], 'Spotlex');
      } else {
        this.toastr.error(res['message'], 'Spotlex');
      }
    }, (error) => {
      this.toastr.error('error', error.error.message);
    })
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
