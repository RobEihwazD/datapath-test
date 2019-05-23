import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { RemoteLaunchConfigItem } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class RpcServiceService {


  constructor() { }

  callProcedure(config: RemoteLaunchConfigItem): Observable<boolean> {
    const bool = Math.random() >= 0.5;

    return of(bool).pipe(delay(1000));
  }
}
