import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { articlesResolver } from './articles.resolver';

import { ArticleCardComponent } from './components/article-card/article-card.component';

import { ArticleDetailPageComponent } from './pages/article-detail-page/article-detail-page.component';
import { ArticleListPageComponent } from './pages/article-list-page/article-list-page.component';

import { ArticleTypeDictionaryPipe } from '../../shared/pipes/article-type-dictionary.pipe';
import { MomentDatePipe } from '../../shared/pipes/moment-date.pipe';
import { SafeHtmlContentPipe } from '../../shared/pipes/safe-html-content.pipe';

export const ROUTES: Routes = [
  {
    path: '',
    component: ArticleListPageComponent,
  },
  {
    path: ':partialUrl',
    component: ArticleDetailPageComponent,
    resolve: { article: articlesResolver },
  },
];

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleDetailPageComponent,
    ArticleListPageComponent,
  ],
  imports: [
    ArticleTypeDictionaryPipe,
    CommonModule,
    MomentDatePipe,
    NgbPaginationModule,
    RouterModule.forChild(ROUTES),
    SafeHtmlContentPipe,
  ],
})
export class ArticlesModule {}
