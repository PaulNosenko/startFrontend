import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HandyServiceService } from '../handy-service.service';
import { ProductItem } from '../product';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [HandyServiceService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  productList: [ProductItem];
private routeSub: any;
private req: any;
query: string;
  constructor(private route: ActivatedRoute, private v: HandyServiceService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe( params =>{
      console.log(params)
      this.query = params['q']
      this.req = this.v.search(this.query).subscribe(data=>{
        this.productList = data as [ProductItem]
      })
    })
  }

  ngOnDestroy(){
   this.routeSub.unsubscribe()
   this.req.unsubscribe()
  }

}
