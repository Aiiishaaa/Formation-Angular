import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubStrPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const start = args[0] ?? 0;
    const end = args[1] ?? value.length;
    return value.substring(start, end);
  }
}
