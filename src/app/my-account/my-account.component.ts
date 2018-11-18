import { Component, OnInit , OnDestroy} from '@angular/core';
import { User } from '../models/user.model';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit, OnDestroy {
  req:any;
  productsList = [];
  user: User;
  totalCost:number = 0;
  itemsPresent:boolean = false;
  constructor(private http: Http,  private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser')) as User;

    console.log("GET WITH HEADERS");
    let headers = new Headers();
    let token1 = localStorage.getItem('token');
    let token = token1.substring(1, token1.length - 1);
    console.log(token);
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;
    console.log(token);
    
    let url = `https://justhopeitworks.herokuapp.com/api/auth/cart`;
    this.http.get(url, opts).subscribe(data =>{
      this.productsList = data.json() as [any];
      if(this.productsList.length > 0){
        this.itemsPresent = true;
      }else{
        this.itemsPresent = false;
      }
    });

    this.http.get(url, opts).subscribe(data =>{
      data.json().forEach(value => {
        this.totalCost = this.totalCost + value.price as number;
        console.log(value.price);
      }); 
    });



  }

  deleteFromCart(prodId:number){
    let userId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.req = this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/deleteFromCart/${userId}/${prodId}`).subscribe(data =>{
             console.log('works fine')    
    });
    window.location.reload();
  }
  deleteFromCart2(prodId:number){
    let userId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.req = this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/deleteFromCart/${userId}/${prodId}`).subscribe(data =>{
             console.log('works fine')    
    });
  }
  buyAll(){
    let userId = JSON.parse(localStorage.getItem('currentUser')).id;
    console.log("GET WITH HEADERS");
    let headers = new Headers();
    let token1 = localStorage.getItem('token');
    let token = token1.substring(1, token1.length - 1);
    console.log(token);
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;
    console.log(token);
    
    let url = `https://justhopeitworks.herokuapp.com/api/auth/cart`;
   
      
      this.http.get(url, opts).subscribe(data =>{
        data.json().forEach(value => { 
          let prodId = value.id;
          console.log(prodId);
          this.req = this.http.get(`https://justhopeitworks.herokuapp.com/api/auth/deleteFromCart/${userId}/${prodId}`).subscribe(data =>{
             console.log('works fine')    
          });
        }); 
      });
      this.router.navigate(['/checkout']);
    }

  myCart() {
    console.log("GET WITH HEADERS");
    let headers = new Headers();
    let token1 = localStorage.getItem('token');
    let token = token1.substring(1, token1.length - 1);
    console.log(token);
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;
    console.log(token);
    let url = `https://justhopeitworks.herokuapp.com/api/auth/cart`;
    this.http.get(url, opts).subscribe(
      res => console.log(res.json()),
      msg => console.error(`Error`)
    );
  }

  ngOnDestroy(){
        // this.req.unsubscribe()
      }

}
