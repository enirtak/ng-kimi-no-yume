import { Component, OnInit } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { Settings } from 'src/settings/settings';
import { SearchList } from '../search/Search';
import { CategoryService } from 'src/app/services/category/category.service';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { MapDreamListToCombinedList, MapDreamCategoryListToCombinedList, SortCombinedList } from 'src/app/helpers/dream-helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alphabet =  Settings.AlphabetList;
  itemCount = Settings.ItemCount;
  currentPage = Settings.CurrentPage;

  categoryList?: Array<DreamCategoryDTO>;
  symbolList: Array<DreamDictionaryDTO> = [];
  dreamList: DreamDictionaryDTO[] = [];
  combinedList: SearchList[] = [];

  selectedCategory: string = '';
  categoryDescription?: string = '';

  constructor(
    private storageSVC: LocalStorageService,
    private categorySVC: CategoryService,
    private dreamSVC: DictionaryService) { }

  ngOnInit(): void {
    this.loadListFromCache()
      .then(() => this.loadSearch());
  }

  async loadListFromCache() {
    this.dreamList = await this.dreamSVC.GetListFromCache();
    this.categoryList = await this.categorySVC.GetListFromCache();
  }

  loadSearch() {
    let dreamList : any[] = [];
    if (this.dreamList) {
      dreamList = MapDreamListToCombinedList(this.dreamList);
    }

    let categoryList: any[] = [];
    if (this.categoryList) {
      categoryList = MapDreamCategoryListToCombinedList(this.categoryList, this.dreamList.length);
    }

    this.combinedList = SortCombinedList(dreamList, categoryList);
  }

  onClickLetter(letter: string) {
    if (this.symbolList) this.symbolList = []; 

    this.selectedCategory = `${letter}`;
    this.categoryDescription = '';   
    
    if (this.combinedList) {
      this.combinedList.forEach((data) => {
        if (data) {
          if (data.name?.toLocaleLowerCase()?.charAt(0) === letter.toLocaleLowerCase()) {
            this.symbolList.push({
              dreamName: data.name,
              dreamDescription: data.description,
              id: data.id
            });
          }
        }
      });
    }
  }

  onClickTheme(id: number | undefined) {
    if (this.symbolList) this.symbolList = [];  

    let category = this.categoryList?.find(x => x.id === id);

    this.selectedCategory = `${category?.categoryName}`;
    this.categoryDescription = category?.description;

    this.symbolList.push(...this.dreamList.filter(x => x.dreamCategoryId === id) ?? []);
  }
}
