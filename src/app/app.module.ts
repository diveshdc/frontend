import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {NgbModule, NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { MyInterceptor } from './interceptor/interceptor';
// import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';
import { MessagesModule } from 'primeng/messages';
import { FooterComponent } from './shared/footer/footer.component';
import { ScrolltotopComponent } from './shared/scrolltotop/scrolltotop.component';
import { TrackDriverComponent } from './customer/track-driver/track-driver.component';
import { LoaderService } from './services/loader.service';

import { LoaderInterceptor } from './interceptor/loader-interceptor.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';

import { AgmCoreModule } from '@agm/core';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        ScrolltotopComponent,
        TrackDriverComponent,
        MyLoaderComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        CustomerModule,
        // FormControl,
        NgbButtonsModule,
        NgbDropdownModule,
        NgbTabsetModule,
        NgbTooltipModule,
        ReactiveFormsModule,
        MessagesModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyAKgOi2zKNGl5XacmeTTjEL1wthOdF7DXU'
          })
        // ToastModule,
    ],
    providers: [
        LoaderService,
        MessageService,
        { provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true
        },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
