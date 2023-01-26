import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AuthLoginInfo } from '../shared/services/login-info';
import { TokenStorageService } from '../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.authService.attemptAuth(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.roles);
        window.sessionStorage.setItem('connected', 'yes');

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        console.log(data);
        //this.reloadPage();
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();

  }

}
