import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    //La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON.
    return value.filter(function (item: any) {
      return JSON.stringify(item).toLowerCase().includes(args);

    });
  }
}


