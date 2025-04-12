import { Component, OnInit } from '@angular/core';
import { Article } from '@vinz-sc/clashofclansfr-api';

import { map, Observable } from 'rxjs';

import { CoreService } from '../../../../core/services/core.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: false,
})
export class HomePageComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _imageUrl!: Observable<string>;
  private _latestArticles!: Observable<Article[]>;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private readonly _coreService: CoreService) {}

  ngOnInit(): void {
    // Get the image URL
    this._imageUrl = this._coreService.api.other.getHeaderImageUrl();

    // Get the latest articles
    this._latestArticles = this._coreService.api.articles
      .getAll({
        pageSize: 6,
      })
      .pipe(map((pagedResult) => pagedResult.items));
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get imageUrl(): Observable<string> {
    return this._imageUrl;
  }

  public get latestArticles(): Observable<Article[]> {
    return this._latestArticles;
  }
}
