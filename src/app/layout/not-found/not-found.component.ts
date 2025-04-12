import { Component } from '@angular/core';
import { ClashOfClansFRError } from '@vinz-sc/clashofclansfr-api';

import { CoreService } from '../../core/services/core.service';

@Component({
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  standalone: false,
})
export class NotFoundComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _error: ClashOfClansFRError | null;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private readonly _coreService: CoreService) {
    this._error = this._coreService.tmpError;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get error(): ClashOfClansFRError | null {
    return this._error;
  }
}
