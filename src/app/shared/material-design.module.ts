import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  ErrorStateMatcher,
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class MaterialDesignModule {}
