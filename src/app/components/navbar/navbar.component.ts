import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  assetRef: string = environment.assetRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['']);
  }

  goToResume() {
    this.router.navigate(['resume']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }
}
