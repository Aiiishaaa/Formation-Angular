import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvalue'
})
export class EvenValuePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    return  value.filter(elt => elt % 2 === 0);
  }

}
