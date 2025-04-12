import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtmlContent',
  standalone: true,
})
export class SafeHtmlContentPipe implements PipeTransform {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  transform(htmlContent: string | undefined): unknown {
    if (!htmlContent) {
      return '';
    }

    // Create a new DOM parser to parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // Extract the text content from the parsed HTML
    return doc.body.textContent || '';
  }
}
