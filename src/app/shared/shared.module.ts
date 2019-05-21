import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { ButtonColorDirective } from './directives/button-color.directive';
import { ResponsiveColumnsDirective } from './directives/responsive-columns.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ButtonColorDirective, ResponsiveColumnsDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
    ,
  ],
  exports:[
    ButtonColorDirective, ResponsiveColumnsDirective, FlexLayoutModule
  ]
})
export class SharedModule { }
