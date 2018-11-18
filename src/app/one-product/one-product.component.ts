import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ProductItem } from '../product';
import { Headers, RequestOptions } from '@angular/http';
import { SharedService } from './../services/shared.service';
import { ResponseApi } from '../models/response-api';
import { UserService } from '../services/user.service';

@Component({
  selector: 'one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
  private req: any;  
  private routeSub: any;
  product: ProductItem;
  link: String;
  shared : SharedService;
  private userService:UserService;
  userPresent: boolean;
  listUsers = [];

  constructor(private route: ActivatedRoute, private http: Http) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    if(localStorage.getItem('Authorization') == null){
      this.userPresent = false;
     }else{
      this.userPresent = true;
     };

     this.http.get('https://justhopeitworks.herokuapp.com/api/auth/products').subscribe(resp => {
      this.listUsers = resp.json() as any;
      
    })

    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params)
      this.link = params['link']
      this.req = this.http.get('https://justhopeitworks.herokuapp.com/api/auth/products').subscribe(data =>{
        data.json().filter(item =>{
          if(item.name == this.link){
            this.product = item as ProductItem
          }
        })
    })
    })
  }

  
 

addToCart(prodId:number) {
  console.log("GET WITH HEADERS");
  let headers = new Headers();
  let token1 = localStorage.getItem('token');
  let token = token1.substring(1, token1.length - 1);
  console.log(token);
  headers.append('Authorization', token);
  let opts = new RequestOptions();
  opts.headers = headers;
  console.log(token);
  let url = `https://justhopeitworks.herokuapp.com/api/auth/addToCart/${prodId}`;
  this.http.get(url, opts).subscribe(
    res => console.log(res.json()),
    msg => console.error(`Error`)
  );
}

ngOnDestroy(){
  this.routeSub.unsubscribe()
  this.req.unsubscribe()
}

}
