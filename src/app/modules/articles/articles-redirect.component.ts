import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleType, ClashOfClansFRError } from '@vinz-sc/clashofclansfr-api';

import { catchError, EMPTY, take } from 'rxjs';

import { CoreService } from '../../core/services/core.service';
import { NEWS, UPDATES } from '../../layout/header/header.navigation';

@Component({
  template: '',
  standalone: true,
})
export class ArticleRedirectComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _coreService: CoreService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      const articleBitlyId = params['bitlyId'];

      this._coreService.api.articles
        .getByBitly(articleBitlyId)
        .pipe(
          take(1),
          catchError((err: ClashOfClansFRError, _) => {
            this._coreService.tmpError = err;
            this._router.navigate(['/404']);

            return EMPTY;
          })
        )
        .subscribe((article) => {
          const url =
            {
              [ArticleType.News]: NEWS.path,
              [ArticleType.Update]: UPDATES.path,
            }[article.type] || '';

          this._router.navigate([url, article.partialUrl]);
        });
    });
  }
}
