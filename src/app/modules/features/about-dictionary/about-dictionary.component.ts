import { Component } from '@angular/core';
import { PersonDTO } from 'src/app/api/models';

@Component({
  selector: 'app-about-dictionary',
  templateUrl: './about-dictionary.component.html',
  styleUrls: ['./about-dictionary.component.css']
})
export class AboutDictionaryComponent {
  currentProfile: PersonDTO | undefined = {};

  constructor( ) { }
}
