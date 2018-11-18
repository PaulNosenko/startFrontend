import { ResponseApi } from './../models/response-api';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { SharedService } from './../services/shared.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import {ProductItem} from '../product';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})

export class ComputersComponent implements OnInit, OnDestroy {
  page:number=0;
  count:number=9;
  pages:Array<number>;
  shared:SharedService;
  message : {};
  classCss :{};
  listUsers = [];

  private req: any;  
  title = "PRODUCTS";
  prodList: [ProductItem];
  userPresent: boolean;
  constructor(private http: Http, 
    private userService:UserService,
  private router:Router
) { 
  this.shared = SharedService.getInstance();
}

  ngOnInit() {
    if(localStorage.getItem('Authorization') == null){
      this.userPresent = false;
     }else{
      this.userPresent = true;
     };
    this.findAll(this.page, this.count);
    
  }

  findAll(page:number, count:number){
    this.userService.filterComputers(page, count).subscribe((responseApi:ResponseApi) => {
      this.listUsers = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {      
    })
  }

  setNextPage(event:any){ 
    event.preventDefault(); 
    if(this.page+1 <this.pages.length) { 
      this.page = this.page+1; 
      this.findAll(this.page, this.count); 
      } 
    }

    setPreviousPage(event:any){ 
      event.preventDefault(); 
      if(this.page+1 > 0) { 
        this.page = this.page-1; 
        this.findAll(this.page, this.count); 
        } 
      }

      setPage(i, event:any){ 
        event.preventDefault();  
          this.page = i; 
          this.findAll(this.page, this.count); 
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
  alert('Chosen item was successfully dded to your cart!');
  this.http.get(url, opts).subscribe(
    res => console.log(res.json()),
    msg => console.error(`Error`)
  );
}



  ngOnDestroy(){
    // this.req.unsubscribe()
  }

}
