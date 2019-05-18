import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPickerComponent } from '@app/views/app-picker/app-picker.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'remoteAppLauncher',
    pathMatch : 'full'
  },
  {
    path : 'remoteAppLauncher',
    component : AppPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
