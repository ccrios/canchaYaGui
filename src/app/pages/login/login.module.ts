import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { materialModule } from 'src/app/material.module';
// import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule,
    // AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})

  ],
  exports: [
    TranslateModule
  ]
})
export class LoginModule { }
