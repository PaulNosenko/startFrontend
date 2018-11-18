import { CurrentUser } from './../models/current-user.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, SharedService]
})
export class LoginComponent implements OnInit {
  user = new User(null, '', '', '', '');
  shared : SharedService;
  message : string;
  constructor(private userService: UserService, private router: Router) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {
  }

  login(){
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) =>{
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      localStorage.setItem('currentUser', JSON.stringify(this.shared.user));
      localStorage.setItem('token', JSON.stringify(this.shared.token))
      // this.shared.user.profile = this.shared.user.profile.substring(5);
      localStorage.setItem('Authorization', JSON.stringify(this.user)); 
      this.router.navigate(['/myaccount']);
      window.location.reload();
    }, err =>{
      this.shared.token = null;
      this.shared.user = null;
      this.message = 'Error';
    });
  }
cancelLogin(){
  this.user = new User(null, '', '', '','');
  this.message = ''; 
  window.location.href = '/login';
  window.location.reload();
}

getFromGroupClass(isInvalid : boolean, isDirty): {}{
  return {
    'form-group' : true, 
    'has-error' : isInvalid && isDirty,
    'has-success' : !isInvalid && isDirty
  };
}

}











