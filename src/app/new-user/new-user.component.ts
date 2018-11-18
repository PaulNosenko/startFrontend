import { ResponseApi } from './../models/response-api';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { SharedService } from './../services/shared.service';
import { User } from './../models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild("form")
  form:NgForm

  user = new User(null, '', '', '','');
  shared : SharedService;
  message : {};
  classCss : {};
  constructor(
    private userService:UserService,
    private router : ActivatedRoute,
    private router2: Router
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    
  }

  register(){
    this.userService.createUser(this.user).subscribe((responseApi : ResponseApi) => {
      this.user = new User(null, '', '', '','');
      let userRet : User = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type : 'success',
        text : 'Registered successfully'
      });
      this.router2.navigate(['/login']);
    }, err =>{
      this.showMessage({ 
        type : 'error', 
        text : 'Email already in use'
      });
    })
  }


  private showMessage(message : {type : string, text: string}) : void{
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000)
  }

  private buildClasses(type : string) :void{
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert-'+type] =true
  }

  getFromGroupClass(isInvalid : boolean, isDirty): {}{
    return {
      'form-group' : true, 
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }

}
