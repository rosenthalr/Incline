import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
})

export class LoginPage {
  users: {}[]
 
  constructor(public http: Http, private loginService: LoginService) {}

  ionViewDidLoad(){
    this.loginService.getUsers()
      .subscribe(response => console.log(response));
  }

}
