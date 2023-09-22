import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchValue: string, fieldName: any, filterMetadata: any): any[] {

    if (!list) return[];
    if (!searchValue) {
      filterMetadata.count = list.length;
      return list;
    }

    let filteredResult = list.filter(key => {
      return key && 
        key[fieldName] && 
        key[fieldName].toLowerCase().includes(searchValue.toLowerCase());
    });

    filterMetadata.count = filteredResult.length;
    return filteredResult;
  }

}
