import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer.component';
import { PricingModule } from './pricing/pricing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CommercialModule } from './commercial/commercial.module';
import { ReferfriendModule } from './referfriend/referfriend.module';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import {CalendarModule} from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        PricingModule,
        DashboardModule,
        CommercialModule,
        ReferfriendModule,
        CalendarModule,
        DynamicDialogModule,
        DialogModule,
        ToastModule,
        ListboxModule
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        CustomerComponent,
        ProfileComponent,
        BasketComponent,
        CheckoutComponent,
        SignupComponent,
    ]
})
export class CustomerModule { }
