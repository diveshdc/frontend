import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] 
  data: Date = new Date();
    focus;
    focus1;

    constructor() { }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
