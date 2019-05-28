import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DefaultService } from '@app/shared/api/default.service';
import { RemoteLaunchConfigItem } from '@app/shared';
import { AppPickerModalityComponent } from '../app-picker-modality/app-picker-modality.component';

@Component({
  selector: 'app-app-delete-modality',
  templateUrl: './app-delete-modality.component.html',
  styleUrls: ['./app-delete-modality.component.scss']
})
export class AppDeleteModalityComponent implements OnInit {

   configDeleteForm : FormGroup;
   availableConfigs: RemoteLaunchConfigItem[];
   selectedConfig ;
  constructor(
    public dialogRef: MatDialogRef<AppPickerModalityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RemoteLaunchConfigItem,
    private fb:  FormBuilder,
    private api: DefaultService
  ) { }

  ngOnInit() {
    this.api.getAllRemoteAppConfigs()
    .subscribe( data =>{
      this.availableConfigs = data['result']
    })

    this.configDeleteForm = this.fb.group({
      targetConfig: ['', Validators.required],

    })
  }

  onConfigSelected(event):void{
    console.log(' evemnt ', event )
    let data = event.value;
    this.selectedConfig = ` alias ${data.alias} : app ${ data.argetApplication}`;
  }

  onSubmit():void{
    console.log(' (this.configDeleteForm.value as RemoteLaunchConfigItem) ', (this.configDeleteForm.value as RemoteLaunchConfigItem))
    console.log(this.configDeleteForm.value )
    this.dialogRef.close( (this.configDeleteForm.get('targetConfig').value as RemoteLaunchConfigItem).id);
  }

}
