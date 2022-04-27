import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppServiceModule } from './../../../../../e01-http/src/app/common/app-service/app-service.module';
import { PublicComponent } from './public.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppCommonModule } from '../../common/app-common/app-common.module';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
})
export class PublicModule { }
