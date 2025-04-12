import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, PagedResult } from '@vinz-sc/clashofclansfr-api';

import { Observable, take } from 'rxjs';

import { CoreService } from '../../../../core/services/core.service';

@Component({
  templateUrl: './article-list-page.component.html',
  styleUrl: './article-list-page.component.scss',
  standalone: false,
})
export class ArticleListPageComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly ARTICLES_PER_PAGE: number = 9;

  public readonly MAXIMUM_PAGES: number = 5;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _articlesPagination!: Observable<PagedResult<Article>>;
  private _title!: string;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this._title = this._activatedRoute.snapshot.data['title'];

    this.onPageChange(1);
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public onPageChange(page: number): void {
    const articleType = this._activatedRoute.snapshot.data['articleType'];
    this._articlesPagination = this._coreService.api.articles
      .getAll({
        type: articleType,
        page: page,
        pageSize: this.ARTICLES_PER_PAGE,
      })
      .pipe(take(1));
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get articlesPagination(): Observable<PagedResult<Article>> {
    return this._articlesPagination;
  }

  public get title(): string {
    return this._title;
  }
}
