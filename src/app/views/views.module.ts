import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '@app/shared/material-design.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from '@app/shared/shared.module';
import { AppPickerComponent } from './app-picker/app-picker.component';
import { AppPickerModalityComponent } from './app-picker/components/app-picker-modality/app-picker-modality.component';
import { AppDeleteModalityComponent } from './app-picker/components/app-delete-modality/app-delete-modality.component';

@NgModule({
  declarations: [
    AppPickerComponent,
    AppPickerModalityComponent,
    AppDeleteModalityComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialDesignModule,
    ColorPickerModule
  ],
  exports:[
    AppPickerComponent,
    AppPickerModalityComponent
  ],
  entryComponents :[
    AppPickerModalityComponent
  ]

})
export class ViewsModule { }
