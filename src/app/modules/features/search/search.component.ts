import { AfterContentChecked , ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { CategoryService } from 'src/app/services/category/category.service';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { SearchList } from './Search';
import { MapDreamCategoryListToCombinedList, MapDreamListToCombinedList, SortCombinedList } from 'src/app/helpers/dream-helper';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterContentChecked   {

  dreamList: Array<DreamDictionaryDTO> = [];
  categoryList: Array<DreamCategoryDTO> = [];
  combinedList: SearchList[] = [];
  searchValue = '';
  filterMetadata = { count: 0 };
  
  constructor(
    private dreamSVC: DictionaryService,
    private categorySVC: CategoryService,
    private cd: ChangeDetectorRef
    ) { }

  ngAfterContentChecked() {
    this.filteredResultCount();
    this.cd.detectChanges();
  }
  
  ngOnInit() {
    this.getLists()
      .then(() => this.loadSearch()) ;
  }

  filteredResultCount() {
    return this.filterMetadata?.count;
  }

  async getLists() {
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
}
