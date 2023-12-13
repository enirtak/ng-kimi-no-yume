import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routerLink: string = '';
  emailTo = 'mailto:katrineannmcconnell@gmail.com?subject=Contact Me';
  linkedInURL = 'https://www.linkedin.com/in/katrineannmcconnell/';
  imgURL = '../../../assets/images/undraw_dev_focus_re_6iwt.svg';
  aboutMeURL = '../../../assets/images/undraw_woman_ffrd.svg';
  githubURL = 'https://github.com/enirtak';

  constructor(private svc: AuthService) { }

  ngOnInit(): void {
    this.routerLink = this.svc.isAuthenticated() ? 'admin' : 'login';

  }


}
