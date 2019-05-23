import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { RemoteLaunchConfigItem } from "@app/shared";
import { DefaultService } from "@app/shared/api/default.service";
import { MatDialog, MatSnackBar } from "@angular/material";
import { AppPickerModalityComponent } from "./components/app-picker-modality/app-picker-modality.component";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BehaviorSubject, Observer, Subscriber, Subscription , of } from "rxjs";
import {  map, catchError } from "rxjs/operators";
import { AppDeleteModalityComponent } from "./components/app-delete-modality/app-delete-modality.component";
import { RpcServiceService } from "@app/shared/services/rpc-service.service";

@Component({
  selector: "app-app-picker",
  templateUrl: "./app-picker.component.html",
  styleUrls: ["./app-picker.component.scss"]
})
export class AppPickerComponent implements OnInit {
  private errorSubject = new BehaviorSubject("");

  //private errorObeserver:Subscription =

  public appLauncherForm: FormGroup;

  public remoteAppData: RemoteLaunchConfigItem[];

  public isMobile: boolean = false;

  public routineRunning: boolean = false;

  public rpcSuccess: boolean = true;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private api: DefaultService,
    private rpcservice: RpcServiceService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    this.errorSubject.subscribe(message => {
      this.snackBar.open(message, "Close", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });

  });

  }

  ngOnInit() {
    this.loadRemoteConfigs();
    this.appLauncherForm = this.fb.group({
      configs: this.fb.array([this.fb.control("")])
    });
  }

  launchAddRemoteAppConfigModal(): void {
    const dialogRef = this.dialog.open(AppPickerModalityComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed result", result);
      if (result) {
        this.createRemoteConFig(result);
      }
    });
  }

  launchDeleteRemoteAppConfigModal(): void {
    const dialogRef = this.dialog.open(AppDeleteModalityComponent, {
      width: "250px"
    });

    dialogRef.afterClosed()
    .subscribe(result => {
      console.log("The dialog was closed result", result);
      if (result) {
        this.deleteRemoteConfig(result);
      }
    });
  }


  deleteRemoteConfig(id): void {
    this.api.deleteRemoteLaunchConfigItem(id)
    .pipe(
      map(() =>  this.loadRemoteConfigs()),
      catchError(() => of(this.errorSubject.next( "Delete remote config failed")))
    )
    .subscribe();
  }

  loadRemoteConfigs(): void {
    this.api.getAllRemoteAppConfigs()
    .pipe(
      map(data => {
        console.log(" remote app data ", data);
        this.remoteAppData = data['result'];
      })
    )
    .subscribe();
  }

  createRemoteConFig(model: RemoteLaunchConfigItem): void {
    console.log(" create config", model);
    this.api.createRemoteLaunchConfigItem(model)
    .pipe(
      map(() =>  this.loadRemoteConfigs()),
      catchError(() => of(this.errorSubject.next( "Create remote config failed")))
    )
    .subscribe();
  }

  updateRemoteConfig(model: RemoteLaunchConfigItem): void {
    this.api.updateRemoteLaunchConfigItem(model.id, model)
    .pipe(
      map(() =>  this.loadRemoteConfigs()),
      catchError(() => of(this.errorSubject.next( "Update remote config failed")))
    )
    .subscribe();
  }

  runRemoteApp(config: RemoteLaunchConfigItem): void {
    this.routineRunning = true;
    console.log(" routing running ", this.routineRunning);
    this.rpcservice.callProcedure(config)
    .pipe(
      map((bool) =>  {if(!bool) this.errorSubject.next( "Remote call failed")})
    )
    .subscribe();
  }
}
