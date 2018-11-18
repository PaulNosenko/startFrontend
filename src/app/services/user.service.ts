import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user.model';
import { SOURCE_API } from './source.api';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }


findAllModal(){
  return this.http.get(`${SOURCE_API}/api/auth/products`);
}



login(user: User){
  return this.http.post(`${SOURCE_API}/api/auth`, user);
}
createUser(user:User){
    user.id = null;
    return this.http.post(`${SOURCE_API}/api/auth/newUser`, user);
  }
findAll(page:number, count:number){
  return this.http.get(`${SOURCE_API}/api/auth/products/${page}/${count}`);
}

filterPriceAsc(page:number, count:number){
  return this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/products/asc/${page}/${count}`);
}

filterPriceDesc(page:number, count:number){
  return this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/products/desc/${page}/${count}`);
}

filterPhones(page:number, count:number){
  return this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/products/category/phone/${page}/${count}`);
}

filterTv(page:number, count:number){
  return this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/products/category/tv/${page}/${count}`);
}

filterComputers(page:number, count:number){
  return this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/products/category/computer/${page}/${count}`);
}

filterGeneral(category:string, page:number, count:number){
  return this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/products/category/${category}/${page}/${count}`);
}

findById(id){
  return this.http.get(`${SOURCE_API}/api/auth/products/${id}`);
}
}

