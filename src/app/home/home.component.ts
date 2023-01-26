import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private router: Router) { 
   // this.reloadPage();
  }

  ngOnInit(): void {
    this.router.navigate(['/home']);
    if(sessionStorage.getItem('connected')== 'yes')
    {
      location.reload() ;
      window.sessionStorage.setItem('connected', 'no');
    }
    
  }

  reloadPage() {
    window.location.reload();

  }

}
