import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import {
  Article,
  ArticleType,
  ClashOfClansFRError,
} from '@vinz-sc/clashofclansfr-api';

import { catchError, EMPTY, take } from 'rxjs';

import { CoreService } from '../../core/services/core.service';

export const articlesResolver: ResolveFn<Article> = (
  route: ActivatedRouteSnapshot
) => {
  // Get the necessary data from the route
  const articlePartialUrl: string = String(route.paramMap.get('partialUrl'));
  const articleType: ArticleType = route.parent?.data['articleType'];

  // Inject the core service and the router
  const coreService: CoreService = inject(CoreService);
  const router: Router = inject(Router);

  return coreService.api.articles
    .getByPartialUrl(articleType, articlePartialUrl)
    .pipe(
      take(1),
      catchError((err: ClashOfClansFRError, _) => {
        coreService.tmpError = err;
        router.navigate(['/404']);

        return EMPTY;
      })
    );
};
