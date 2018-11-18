import { User } from './../models/user.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
private static instance : SharedService = null;
user: User;
token: string;
showtemplate = new EventEmitter<boolean>();
  constructor() {
    return SharedService.instance = SharedService.instance;
   }
   public static getInstance(){
     if(this.instance == null){
       this.instance = new SharedService();
     }
     return this.instance;
   }

   isLoggedIn(): boolean{
     if(this.user == null){
       return false;
     }
     return this.user.email != '';
   }

}
