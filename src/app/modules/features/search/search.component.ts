import { Component, OnInit } from '@angular/core';
import { DreamDictionaryDTO } from 'src/app/api/models';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dreamList?: Array<DreamDictionaryDTO>;
  searchValue = '';

  constructor(private svc: DictionaryService) { }

  ngOnInit() {
    let list = localStorage.getItem("dreamList");
    if (list) this.dreamList = JSON.parse(list);
    else this.getDreamList();
  }

  getDreamList() {
    this.svc.GetList()
      .then(data => {
        this.dreamList = data.dictionaryList;
        localStorage.setItem("dreamList", JSON.stringify(this.dreamList));
      });
  }

}
