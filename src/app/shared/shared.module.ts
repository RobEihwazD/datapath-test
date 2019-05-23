import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { ButtonColorDirective } from './directives/button-color.directive';
import { RpcServiceService } from '@app/shared/services/rpc-service.service'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ButtonColorDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
    ,
  ],
  exports:[
    ButtonColorDirective, FlexLayoutModule
  ],
  providers : [RpcServiceService]
})
export class SharedModule { }
