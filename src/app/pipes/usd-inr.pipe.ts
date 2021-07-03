import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: any): unknown {
    //const x = args.charAt(2);
    const x=value.charAt(0);
    const pos=x.indexOf
    //const newvalue = value.replace('Grassi', 'react');
    console.log('resu=', x)
    return value.charAt(0).toUpperCase()+ value.substr(1);
  }

}
