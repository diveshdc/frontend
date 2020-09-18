import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    constructor( private renderer: Renderer2,
                 private router: Router,
                 @Inject(DOCUMENT)
                 private document: any,
                 private element: ElementRef,
                 public location: Location,
                 public http: HttpClient,
                 ) {

                 }
    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
             } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
            // event
            this.renderer.listen('window', 'scroll', () => {
                const number = window.scrollY;
                let _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
    scrollToTop() {
        (function smoothscroll() {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }

    makeHttpCall() {
        this.http.get('https://jsonplaceholder.typicode.com/comments')
          .subscribe((r) => {
            console.log(r);
          });
      }
}
