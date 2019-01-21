//libs
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; 
//auth
import { TokenStorageService } from '../auth/token-storage.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService, private router: Router) { }
  //init
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    //validate user token
    this.validateUser();
  }
  //logout app
  logout() {
    this.token.signOut();
     //redirection to home
     this.router.navigate(["/"]);
  }
  //validate user token  in system
  validateUser(){
    if(this.token.getToken() == null){
     //redirection to login for error
     this.router.navigate(["/"]);
    }
  }

}
