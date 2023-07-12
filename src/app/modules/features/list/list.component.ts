import { Component, OnInit } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { Settings } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  symbolList: Array<DreamDictionaryDTO> = [];
  dreamList: DreamDictionaryDTO[] = [];

  selectedCategory: string = '';
  description?: string = '';

  themeList?: Array<DreamCategoryDTO>;

  itemCount = Settings.itemCount;
  currentPage = Settings.currentPage;
  
  constructor(
    private storageSVC: LocalStorageService) { }

  ngOnInit(): void {
    this.loadListFromCache();
  }

  loadListFromCache() {
    let cachedList = this.storageSVC.get(Settings.dreamListKey);
    this.dreamList = this.storageSVC.parse(cachedList);

    let themeList = this.storageSVC.get(Settings.dreamThemeKey);
    this.themeList = this.storageSVC.parse(themeList);
  }

  onClickLetter(letter: string) {
    console.log('onClickLetter ' + letter)
    
    this.selectedCategory = `${letter}`;
    this.description = '';

    // clear current list
    if (this.symbolList) this.symbolList = [];    
    
    if (this.dreamList) {
      this.dreamList.forEach((data) => {
        if (data) {
          if (data.dreamName?.toLocaleLowerCase()?.charAt(0) === letter.toLocaleLowerCase()) {
            this.symbolList.push(data);
          }
        }
      });
    }
  }

  onClickTheme(id: number | undefined) {
    console.log('onClickTheme ' + id);
    let category = this.themeList?.find(x => x.id === id);

    this.selectedCategory = `${category?.categoryName}`;
    this.description = category?.description;
    
    // clear current list
    if (this.symbolList) this.symbolList = [];  

    this.symbolList.push(...this.dreamList.filter(x => x.dreamCategoryId === id) ?? []);
  }
}
