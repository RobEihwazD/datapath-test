import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';
import { RemoteLaunchConfigItem } from '@app/shared';
import { DefaultService } from '@app/shared/api/default.service';
import { MatDialog } from '@angular/material';
import { AppPickerModalityComponent } from './components/app-picker-modality/app-picker-modality.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-app-picker',
  templateUrl: './app-picker.component.html',
  styleUrls: ['./app-picker.component.scss']
})
export class AppPickerComponent implements OnInit {

  public appLauncherForm: FormGroup;

  public remoteAppData:  RemoteLaunchConfigItem[];

  public isMobile: boolean = false;

  public routineRunning : boolean = false;

  constructor(private fb : FormBuilder,
              public dialog: MatDialog,
              private api: DefaultService,
              breakpointObserver: BreakpointObserver ) {
                breakpointObserver.observe([
                  Breakpoints.Handset
                ]).subscribe(result => {
                  this.isMobile = result.matches;
                });
               }

  ngOnInit() {

    this.remoteAppData = this.loadRemoteConfigs();
    this.appLauncherForm = this.fb.group({
      configs: this.fb.array([
        this.fb.control('')
      ])
    });

  }

  addRemoteAppConfig():void{
    const dialogRef = this.dialog.open(AppPickerModalityComponent, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result', result);
      if(result){
      this.remoteAppData.push(result);}
    });
  }

  deleteRemoteConfig():void{

  }

  loadRemoteConfigs():Array<RemoteLaunchConfigItem>{
    const configOne = {} as RemoteLaunchConfigItem;
    configOne.alias = 'notepad one';
    configOne.colour = 'blue';
    configOne.name = 'notepad.exe';
    configOne.id = 0;

    const configTwo = {} as RemoteLaunchConfigItem;
    configTwo.alias = 'notepad two';
    configTwo.colour = 'green';
    configTwo.name = 'notepad.exe';
    configTwo.id = 1;

    const configThree = {} as RemoteLaunchConfigItem;
    configThree.alias = 'notepad three';
    configThree.colour = 'red';
    configThree.name = 'notepad.exe';
    configThree.id = 0;

    const configFour = {} as RemoteLaunchConfigItem;
    configFour.alias = 'notepad four';
    configFour.colour = 'green';
    configFour.name = 'notepad.exe';
    configFour.id = 1;

    return [configOne,configTwo,configThree, configFour]
  }

  createRemoteConFig():void{

  }

  deleteRemoteConfigs():void{

  }

  updateRemoteConfig():void{

  }

  runRemoteApp(config:RemoteLaunchConfigItem):void{

  }



}
