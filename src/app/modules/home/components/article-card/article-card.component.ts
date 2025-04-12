import { Component, Input, OnInit } from '@angular/core';
import { Article, ArticleType } from '@vinz-sc/clashofclansfr-api';

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

  private _imageUrl?: string;

  @Input()
  public article?: Article;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  ngOnInit(): void {
    this._imageUrl =
      this.article?.headerImageUrl ??
      `https://img.youtube.com/vi/${this.article?.headerYoutubeId}/maxresdefault.jpg`;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get ArticleType(): typeof ArticleType {
    return ArticleType;
  }

  public get imageUrl(): string | undefined {
    return this._imageUrl;
  }

  public get link(): string | undefined {
    switch (this.article?.type) {
      case ArticleType.News:
        return `news/${this.article?.partialUrl}`;
      case ArticleType.Update:
        return `updates/${this.article?.partialUrl}`;
      default:
        return undefined;
    }
  }
}
