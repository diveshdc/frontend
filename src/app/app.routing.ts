import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './customer/landing/landing.component';
import { LoginComponent } from './customer/login/login.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { PricingComponent } from './customer/pricing/pricing.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { CommercialComponent } from './customer/commercial/commercial.component';
import { ReferfriendComponent } from './customer/referfriend/referfriend.component';
import { TrackDriverComponent } from './customer/track-driver/track-driver.component';
import { BasketComponent } from './customer/basket/basket.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './customer/signup/signup.component';
const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: LoginComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
    { path: 'login',       component: LoginComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'order',     component: PricingComponent },
    { path: 'dashboard',     component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'commercial',     component:  CommercialComponent},
    { path: 'refer-to-friend',     component:  ReferfriendComponent},
    { path: 'track-driver',     component:  TrackDriverComponent},
    { path: 'basket',     component:  BasketComponent},
    { path: 'checkout/:skip', component: CheckoutComponent },
    { path: 'checkout',     component:  CheckoutComponent},
    { path: 'signup',     component:  SignupComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
    ],
    providers: [AuthGuard],
    exports: [
    ],
})
export class AppRoutingModule { }
