import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  @Input() currentPage: string = '';

  constructor(private authSVC: AuthService,) { }

  ngOnInit(): void {
  }

  get isAuthenticated() {
    return this.authSVC.isAuthenticated();
  }

  onLogoutButtonClick() {
    this.authSVC.logout();
  }
}
