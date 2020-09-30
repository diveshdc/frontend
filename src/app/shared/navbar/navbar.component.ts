import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from '../auth.guard';
import { ToastrService } from 'ngx-toastr';
import { GetterSetterService } from '../../services/getter-setter.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    // tslint:disable-next-line:no-inferrable-types
    loggedIn: boolean;
     userData: any;

    constructor(public location: Location,
        private element: ElementRef,
        private router: Router,
        private authservice: AuthService,
        public auth: AuthGuard,
        private toastr: ToastrService,
        private getSetService: GetterSetterService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.getSetService.getLoggedInStatus()
        .subscribe((result) => {
          this.loggedIn = result;
        })
      this.authservice.maintainStatus();
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '/documentation' ) {
            return true;
        } else {
            return false;
        }
    }

    // scroll(id) {
    //     console.log(`scrolling to ${id}`);
    //     const el = document.getElementById(id);
    //     el.scrollIntoView();
    //   }

    orderNow() {
        // if (this.signInButton === true) {
        //     this.router.navigate(['/', 'login']);
        // }
    }

    logOut() {
        this.authservice.logout().subscribe(async res => {
            if (res['status'] === true) {
                this.getSetService.setLoggedInStatus(false);
                this.authservice.removeToken();
              this.toastr.success(res['message'], 'Spotlex');
                  this.router.navigate(['/login']);
                // this.route.navigate(['/order']);
            } else if (res['status'] === false) {
              this.toastr.error(res['message'], 'Spotlex');
            } else {
              this.toastr.error(res['message'], 'Spotlex');
            }
          }, (error) => {
            this.toastr.error('error', error.error.message);
          })
    }
}
