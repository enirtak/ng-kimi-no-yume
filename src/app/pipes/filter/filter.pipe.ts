import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchValue: string, fieldName: any): any[] {

    if (!list) return[];
    if (!searchValue) return list;

    return list.filter(key => {
      return key && 
      key[fieldName] && 
      key[fieldName].toLowerCase().includes(searchValue.toLowerCase());
    });
  }

}
