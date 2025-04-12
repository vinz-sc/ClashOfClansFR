import { Pipe, PipeTransform } from '@angular/core';
import { ArticleType } from '@vinz-sc/clashofclansfr-api';

@Pipe({
  name: 'articleTypeDictionary',
  standalone: true,
})
export class ArticleTypeDictionaryPipe implements PipeTransform {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  transform(articleType: ArticleType | undefined): unknown {
    switch (articleType) {
      case ArticleType.News:
        return 'Actualité';
      case ArticleType.Update:
        return 'Mise à jour';
      default:
        return `TODO: ${articleType}`;
    }
  }
}
