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
    return value.filter((item: any) => {
      return item?.nomProduit?.toLowerCase().includes(args) ||
        item?.marqueProduit?.toLowerCase().includes(args) ||
        item?.genreProduit?.toLowerCase().includes(args) ||
        item?.prixProduit?.toLowerCase().includes(args) ||
        item?.prixRedProduit?.toLowerCase().includes(args);



    });
  }
}


