import { Component, OnInit } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { Settings } from 'src/settings/settings';
import { SearchList } from '../search/Search';
import { CategoryService } from 'src/app/services/category/category.service';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { MapDreamListToCombinedList, MapDreamCategoryListToCombinedList, SortCombinedList } from 'src/app/helpers/dream-helper';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alphabet =  Settings.AlphabetList;
  itemCount = Settings.ItemCount;
  currentPage = Settings.CurrentPage;

  categoryList: Array<DreamCategoryDTO> = [];
  symbolList: Array<DreamDictionaryDTO> = [];
  dreamList: DreamDictionaryDTO[] = [];
  combinedList: SearchList[] = [];

  selectedCategory: string = '';
  categoryDescription?: string = '';

  form!: FormGroup;

  constructor(
    private categorySVC: CategoryService,
    private dreamSVC: DictionaryService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadListFromCache()
      .then(() => this.loadSearch());

    if (!this.form) {
      this.form = this.fb.group({
        selectedLetter: new FormControl(),
        selectedTheme: new FormControl()
      });
    }

    this.subscribeToFormChanges();
  }

  subscribeToFormChanges() {
    this.form.get('selectedLetter')?.valueChanges
    .subscribe((letter) => {
      this.onLetterChange(letter);
      this.form.get('selectedTheme')?.setValue(null, { emitEvent: false });
    });

    this.form.get('selectedTheme')?.valueChanges
    .subscribe((theme) => {
      this.onThemeChange(theme);
      this.form.get('selectedLetter')?.setValue(null, { emitEvent: false });
    });
  }

  onThemeChange(id: any) {
    this.symbolList = [];  

    let category = this.categoryList?.find(x => x.id === id);

    this.selectedCategory = `${category?.categoryName}`;
    this.categoryDescription = category?.description;

    this.symbolList.push(...this.dreamList.filter(x => x.dreamCategoryId === id) ?? []);
  }

  onLetterChange(letter: any) {
    this.symbolList = []; 
    this.categoryDescription = '';
    this.selectedCategory = `${letter}`;
    
    if (this.combinedList) {
      this.symbolList = this.combinedList
        .filter(data => data && data.name?.toLowerCase()?.charAt(0) === letter.toLowerCase())
        .map(data => ({
          dreamName: data.name,
          dreamDescription: data.description,
          id: data.id
        })
      );
    }
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
}
