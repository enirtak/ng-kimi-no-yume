import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routerLink: string = '';

  constructor(private svc: AuthService) { }

  ngOnInit(): void {
    this.routerLink = this.svc.isAuthenticated() ? 'admin' : 'login';
  }
}
