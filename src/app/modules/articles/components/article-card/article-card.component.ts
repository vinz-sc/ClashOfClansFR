import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@vinz-sc/clashofclansfr-api';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  standalone: false,
})
export class ArticleCardComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _headerImageUrl: string = '';

  @Input()
  public article?: Article;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  ngOnInit(): void {
    this._headerImageUrl =
      this.article?.headerImageUrl ??
      `https://img.youtube.com/vi/${this.article?.headerYoutubeId}/maxresdefault.jpg`;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get headerImageUrl(): string {
    return this._headerImageUrl;
  }
}
