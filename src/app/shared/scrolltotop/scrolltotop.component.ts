import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scrolltotop',
  templateUrl: './scrolltotop.component.html',
  styleUrls: ['./scrolltotop.component.css']
})
export class ScrolltotopComponent implements OnInit {
  windowScrolled: boolean;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
    }
}
constructor(@Inject(DOCUMENT) private document: Document) {}


  ngOnInit(): void {
  }
  scrollToTop() {
    (function smoothscroll() {
        // tslint:disable-next-line:prefer-const
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
}

}
