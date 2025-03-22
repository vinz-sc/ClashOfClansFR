import { Injectable } from '@angular/core';
import { ILoadingService } from '@vinz-sc/clashofclansfr-api';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService implements ILoadingService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _loadingSubject = new BehaviorSubject<boolean>(false);

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public hide(): void {
    this._loadingSubject.next(false);
  }

  public show(): void {
    this._loadingSubject.next(true);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get loading(): Observable<boolean> {
    return this._loadingSubject.asObservable();
  }
}
