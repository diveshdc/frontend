import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ValidationService } from '../../services/validation.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public userLoginForm: FormGroup;
    user: any = []
    public account_validation_messages = ValidationService.account_validation_messages;

    data: Date = new Date();
    focus;
    focus1;

    constructor(private formBuilder: FormBuilder,
                private authservice: AuthService,
                private route: Router,
                private toastr: ToastrService) { }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        this.userLoginForm = this.formBuilder.group({
            email: ['', [Validators.required,
                        Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'),
                        ValidationService.avoidEmptyStrigs]],
            password : ['', [Validators.required, Validators.minLength(6)]]
            });
    }

    getUserLogin() {
        if (this.userLoginForm.invalid) {
          this.validateAllFormFields(this.userLoginForm);
          return true;
        }
        this.authservice.login(this.userLoginForm.value).subscribe(async res => {
            if (res['status'] === true) {
              this.toastr.success(res['message'], 'Spotlex');
              await this.authservice.showToastrMessage('success', 'User Login', res['message']);
                localStorage.setItem('la_user_token', res['token']);
                localStorage.setItem('la_user_token_data', JSON.stringify(res['data']));
                this.route.navigate(['']);
            } else if (res['status'] === false) {
              this.toastr.error(res['message'], 'Spotlex');
            } else {
              console.log(res, 'resres')
              this.toastr.error(res['message'], 'Spotlex');
            }
          }, (error) => {
            this.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
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

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
