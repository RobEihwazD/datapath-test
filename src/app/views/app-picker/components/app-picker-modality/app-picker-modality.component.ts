import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DefaultService } from '@app/shared/api/default.service';
import { RemoteLaunchConfigItem, InstalledApplication } from '@app/shared';
@Component({
  selector: 'app-app-picker-modality',
  templateUrl: './app-picker-modality.component.html',
  styleUrls: ['./app-picker-modality.component.scss']
})
export class AppPickerModalityComponent implements OnInit {

  newRemoteConfigForm: FormGroup;
  applicationsList: Array<InstalledApplication>;
  defaultColour = '#2889e9';
  constructor(
    public dialogRef: MatDialogRef<AppPickerModalityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RemoteLaunchConfigItem,
    private fb:  FormBuilder,
    private api: DefaultService

  ) { }

  ngOnInit() {
    this.api.getAvailableApplications()
    .subscribe(
      data =>{
        this.applicationsList = data['result'], // swagger error
        console.log(' getAvailableApplications ', data)
      },
      error =>{
        console.log(' getAvailableApplications ')
      }
      );

    this.newRemoteConfigForm = this.fb.group({
      targetApplication: ['', Validators.required],
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
