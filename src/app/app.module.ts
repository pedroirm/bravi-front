import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {TokenInterceptor} from "./services/interceptors/token.interceptor";
import {ContactCreateComponent} from './contact-create/contact-create.component';
import {NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask} from "ngx-mask";
import {IConfig} from 'ngx-mask';
import { BracketsComponent } from './brackets/brackets.component'

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        ContactDetailComponent,
        ContactCreateComponent,
        BracketsComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HttpClientModule,
        NgxMaskDirective,
        NgxMaskPipe,

    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        provideEnvironmentNgxMask(maskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
