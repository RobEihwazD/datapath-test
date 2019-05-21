import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';
import { DefaultService } from '@app/shared/api/default.service';
import { RemoteLaunchConfigItem } from '@app/shared';
@Component({
  selector: 'app-app-picker-modality',
  templateUrl: './app-picker-modality.component.html',
  styleUrls: ['./app-picker-modality.component.scss']
})
export class AppPickerModalityComponent implements OnInit {

  newRemoteConfigForm: FormGroup;
  applicationsList: string[];
  defaultColour = '#2889e9';
  constructor(
    public dialogRef: MatDialogRef<AppPickerModalityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RemoteLaunchConfigItem,
    private fb:  FormBuilder,
    private api: DefaultService

  ) { }

  ngOnInit() {
    this.api.getAvailableApplications()
    .subscribe( data =>{
      this.applicationsList = data;
    });

    this.newRemoteConfigForm = this.fb.group({
      namedApplication: ['', Validators.required],
      alias: ['', Validators.required],
      colour: ['', Validators.required]
    })
  }

  onColorSelected(event:any):void{
    console.group('  on colour selected ', event)
    const control:FormControl = this.newRemoteConfigForm.get('colour') as FormControl
    control.setValue(event);
    control.markAsDirty();
  }

  onSubmit():void{
    this.dialogRef.close( this.newRemoteConfigForm.value as RemoteLaunchConfigItem);
  }



}
