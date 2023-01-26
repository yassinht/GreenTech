import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../shared/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['/login']);
  }

}
