import { Injectable } from '@angular/core';
import { ClashOfClansFRApi } from '@vinz-sc/clashofclansfr-api';

import { LoadingService } from './loading.service';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _api: ClashOfClansFRApi;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(loadingService: LoadingService) {
    // Inputs
    {
      this._api = new ClashOfClansFRApi(environment.apiUrl, loadingService);
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
}
