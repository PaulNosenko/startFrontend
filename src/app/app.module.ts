import { AuthGuard } from './auth.guard';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ProductsComponent } from './products/products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAccountComponent } from './my-account/my-account.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FilteredAscComponent } from './filtered-asc/filtered-asc.component';
import { FilterDescComponent } from './filter-desc/filter-desc.component';
import { PhonesComponent } from './phones/phones.component';
import { TvsComponent } from './tvs/tvs.component';
import { ComputersComponent } from './computers/computers.component';
import { WatchComponent } from './watch/watch.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NewsComponent } from './news/news.component';
import { EnewsComponent } from './enews/enews.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OneProductComponent,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    LoginComponent,
    MyAccountComponent,
    NewUserComponent,
    FilteredAscComponent,
    FilterDescComponent,
    PhonesComponent,
    TvsComponent,
    ComputersComponent,
    WatchComponent,
    AccessoriesComponent,
    CheckoutComponent,
    NewsComponent,
    EnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
