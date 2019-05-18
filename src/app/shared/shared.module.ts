import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { ButtonColorDirective } from './directives/button-color.directive'

@NgModule({
  declarations: [ButtonColorDirective],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    ButtonColorDirective
  ]
})
export class SharedModule { }
