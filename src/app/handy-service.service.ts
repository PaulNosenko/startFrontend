import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'https://justhopeitworks.herokuapp.com/api/auth/products'
@Injectable()
export class HandyServiceService {

  constructor(private http: Http) { }

  list(){
    this.http.get(endpoint)
    .map(response => response.json())
    .catch(this.handleError)
  }

  handleError(error: any, caught: any): any {
    console.log(error, caught)
  }

  search(query){
  return this.http.get(endpoint).map(response=>{
  let data = []

  
  let fakeQuery:string
  let fakeIN:string
  

  let req = response.json().filter(item=>{
  fakeQuery=query.toUpperCase()
  fakeIN=item.name.toUpperCase()
    
  
    if(fakeIN.indexOf(fakeQuery) >= 0){
			data.push(item)
			} 
		})
		return data
}).catch(this.handleError)
  }

}
