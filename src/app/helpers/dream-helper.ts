import { DreamCategoryDTO, DreamDictionaryDTO } from "../api/models";

export function MapDreamListToCombinedList(list: DreamDictionaryDTO[]) {
    let result = list.map((x, index) => {
        return {
            id: index,
            name: x.dreamName,
            description: x.dreamDescription
        }
    });

    return result;
}

export function MapDreamCategoryListToCombinedList(list: DreamCategoryDTO[], dreamListLength: number) {
    let result = list.map((x, index) => {
        return {
            id: dreamListLength + index,
            name: x.categoryName,
            description: x.description
        }
    });

    return result;
}

export function SortCombinedList(dreams: any[], categories: any[]) {
    let sortedList = [
        ...dreams, 
        ...categories
      ].sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));
    
    return sortedList;
}