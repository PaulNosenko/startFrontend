import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  req:any;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  sendMail(){
    let email = JSON.parse(localStorage.getItem('currentUser')).email;
    let body = 'Your order has been accepted - Best Regards from Handy Store!';
    this.http.get(`https://mail-sender-api-my.herokuapp.com/send/${email}/Handy Store Confiramtion/${body}`).subscribe(data =>{
             console.log('works fine')    
             console.log(email)
             console.log(body)        
    });
    this.router.navigate(['/myaccount']);
  }

}
