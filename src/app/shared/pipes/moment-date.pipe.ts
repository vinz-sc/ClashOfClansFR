import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment';
import 'moment/locale/fr';

@Pipe({
  name: 'momentDate',
  standalone: true,
})
export class MomentDatePipe implements PipeTransform {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  transform(
    value: moment.Moment | undefined,
    format: string = 'DD/MM/YYYY'
  ): unknown {
    return value?.locale('fr').format(format);
  }
}
