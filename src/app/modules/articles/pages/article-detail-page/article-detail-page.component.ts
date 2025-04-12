import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleType } from '@vinz-sc/clashofclansfr-api';

@Component({
  templateUrl: './article-detail-page.component.html',
  styleUrl: './article-detail-page.component.scss',
  standalone: false,
})
export class ArticleDetailPageComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _article: Article;
  private readonly _headerUrl: SafeUrl;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _sanitizer: DomSanitizer
  ) {
    this._article = this._activatedRoute.snapshot.data['article'];
    this._headerUrl =
      this._article.headerImageUrl ??
      this._sanitizer.bypassSecurityTrustUrl(
        `https://www.youtube.com/embed/${this.article.headerYoutubeId}`
      );
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

  public get article(): Article {
    return this._article;
  }

  public get content(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this._article.content);
  }

  public get headerUrl(): SafeUrl {
    return this._headerUrl;
  }
}
