import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleType } from '@vinz-sc/clashofclansfr-api';

import { NotFoundComponent } from './layout/not-found/not-found.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';

import { ArticleRedirectComponent } from './modules/articles/articles-redirect.component';

import {
  ARTICLE_BITLY,
  HOME,
  NEWS,
  UPDATES,
} from './layout/header/header.navigation';

const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: HOME.path,
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: NEWS.path,
        loadChildren: () =>
          import('./modules/articles/articles.module').then(
            (m) => m.ArticlesModule
          ),
        data: { articleType: ArticleType.News, title: NEWS.title },
      },
      {
        path: UPDATES.path,
        loadChildren: () =>
          import('./modules/articles/articles.module').then(
            (m) => m.ArticlesModule
          ),
        data: { articleType: ArticleType.Update, title: UPDATES.title },
      },
      {
        path: ARTICLE_BITLY.path,
        component: ArticleRedirectComponent,
      },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
