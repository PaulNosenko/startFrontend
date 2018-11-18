import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Diploma Application';
  userPresent: boolean;
  constructor(){}
  
  ngOnInit() {
     if(localStorage.getItem('Authorization') == null){
      this.userPresent = false;
     }else{
      this.userPresent = true;
     }
    console.log(this.userPresent)
  }

}
