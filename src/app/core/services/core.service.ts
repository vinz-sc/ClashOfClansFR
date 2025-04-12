import { Injectable } from '@angular/core';
import {
  ClashOfClansFRApi,
  ClashOfClansFRError,
} from '@vinz-sc/clashofclansfr-api';

import { SpinnerVisibilityService } from 'ng-http-loader';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _api: ClashOfClansFRApi;

  private _tmpError: ClashOfClansFRError | null = null;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(spinnerService: SpinnerVisibilityService) {
    // Inputs
    {
      this._api = new ClashOfClansFRApi(
        environment.apiUrl,
        {
          show: spinnerService.show.bind(spinnerService),
          hide: spinnerService.hide.bind(spinnerService),
        },
        null,
        environment.production ? undefined : console.info
      );
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get api(): ClashOfClansFRApi {
    return this._api;
  }

  public get tmpError(): ClashOfClansFRError | null {
    const error = this._tmpError;
    this._tmpError = null;
    return error;
  }

  /* * * * * * * * * * * * * * * *\
  |*           SETTERS           *|
  \* * * * * * * * * * * * * * * */

  public set tmpError(error: ClashOfClansFRError | null) {
    this._tmpError = error;
  }
}
