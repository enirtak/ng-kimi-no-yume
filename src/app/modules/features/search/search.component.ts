import { Component, OnInit } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { CategoryService } from 'src/app/services/category/category.service';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { SearchList } from './Search';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { Settings } from 'src/settings/settings';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dreamList: Array<DreamDictionaryDTO> = [];
  themeList: Array<DreamCategoryDTO> = [];
  combinedList: SearchList[] = [];
  searchValue = '';

  constructor(
    private svc: DictionaryService,
    private themeSVC: CategoryService,
    private storageSVC: LocalStorageService
    ) { }

  ngOnInit() {
    this.getLists();
    this.loadSearch();
  }

  getLists() {
    let theme = this.storageSVC.get(Settings.DreamThemeKey);
    this.themeList = this.storageSVC.parse(theme) ?? this.getDreamThemeList();

    let list = this.storageSVC.get(Settings.DreamListKey);
    this.dreamList = this.storageSVC.parse(list) ?? this.getDreamList();
  }

  loadSearch() {
    this.combinedList = [
      ...this.dreamList?.map((x, index) => {
        return {
          id: index,
          name: x.dreamName,
          description: x.dreamDescription
        }
      }), 
      ...this.themeList?.map((x, index) => {
        return {
          id: this.dreamList.length + index,
          name: x.categoryName,
          description: x.description
        }
      })
    ]?.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));

    console.log(this.combinedList)
  }

  getDreamList() {
    this.svc.GetList()
      .then(data => {
        if (data) {
          this.dreamList = data.dictionaryList ?? [];
          this.storageSVC.set(Settings.DreamListKey, this.dreamList);
        }
      });
  }

  getDreamThemeList() {
    this.themeSVC.GetList()
      .then(data => {
        if (data) {
          this.themeList = data.categories ?? [];
          this.storageSVC.set(Settings.DreamThemeKey, this.themeList);
        }
      });
  }
}
