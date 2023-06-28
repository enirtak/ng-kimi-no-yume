import { Component, OnInit } from '@angular/core';
import { DreamDictionaryDTO } from 'src/app/api/models';
import { Settings } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  list: Array<DreamDictionaryDTO> = [];
  selectedLetter!: string;

  itemCount = Settings.itemCount;
  currentPage = Settings.currentPage;
  
  constructor() { }

  ngOnInit(): void {
    this.onClickLetter('a');
  }

  onClickLetter(letter: string) {
    console.log('onClickLetter ' + letter)
    this.selectedLetter = letter;

    // clear current list
    this.list = [];

    let cachedList = localStorage.getItem('dreamList');
    let dreamList: DreamDictionaryDTO[];

    if (cachedList) {
      dreamList = JSON.parse(cachedList) as Array<DreamDictionaryDTO>;

      dreamList?.forEach((data) => {
        if (data) {
          if (data.dreamName?.toLocaleLowerCase()?.charAt(0) === letter.toLocaleLowerCase()) {
            this.list.push(data);
          }
        }
      });
    }
  }
}
