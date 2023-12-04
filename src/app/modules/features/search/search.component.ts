import { AfterContentChecked , ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { CategoryService } from 'src/app/services/category/category.service';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { SearchList } from './Search';
import { MapDreamCategoryListToCombinedList, MapDreamListToCombinedList, SortCombinedList } from 'src/app/helpers/dream-helper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, debounceTime, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterContentChecked   {

  dreamList: Array<DreamDictionaryDTO> = [];
  categoryList: Array<DreamCategoryDTO> = [];
  combinedList: SearchList[] = [];
  
  searchResultCount: number = 0;
  searchForm!: FormGroup;
  searchFormResult!: Observable<any[]>;
  
  constructor(
    private dreamSVC: DictionaryService,
    private categorySVC: CategoryService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
    ) { }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
  
  ngOnInit() {
    this.getLists()
      .then(() => this.loadSearch()) ;

    if (!this.searchForm) {
      this.searchForm = this.fb.group({
        searchInput: ['']
      });
    }

    this.searchForm.get('searchInput')?.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((data) => {
        this.searchFormResult = of(this.getSearchResult(data));
    });
  }

  getSearchResult(search: any): any[] {
    if (!this.combinedList) return[];
    if (!search) return this.combinedList;

    let result = this.combinedList
      .filter((key: any) => {
        return key &&
        key['name'] &&
        key['name'].toLowerCase().includes(search.toLowerCase())
      });

    this.searchResultCount = result.length;
    return result;
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
