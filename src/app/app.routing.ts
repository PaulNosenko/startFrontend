import { FilteredAscComponent } from './filtered-asc/filtered-asc.component';
import { AuthGuard } from './auth.guard';
import { MyAccountComponent } from './my-account/my-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { HomeComponent } from './home/home.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FilterDescComponent } from './filter-desc/filter-desc.component';
import { PhonesComponent } from './phones/phones.component';
import { TvsComponent } from './tvs/tvs.component';
import { ComputersComponent } from './computers/computers.component';
import { WatchComponent } from './watch/watch.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NewsComponent } from './news/news.component';
import { EnewsComponent } from './enews/enews.component';

const appRoutes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"products",
        component:ProductsComponent
    },
    {
        path:"news",
        component:NewsComponent
    },
    {
        path:"enews",
        component:EnewsComponent
    },
    {
        path:"checkout",
        component:CheckoutComponent
    },
    {
        path:"watches",
        component: WatchComponent
    },
    {
        path:"accessories",
        component: AccessoriesComponent
    },
    {
        path:"computers",
        component:ComputersComponent
    },
    {
        path:"tvs",
        component:TvsComponent
    },
    {
        path:"phones",
        component:PhonesComponent
    },
    {
        path:"filteredPriceDesc",
        component:FilterDescComponent
    },
    {
        path:"products/:link",
        component:OneProductComponent
    },
    {
        path:"search",
        component:SearchDetailComponent
    },
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"myaccount",
        component:MyAccountComponent
    },
    {
        path:"filteredPriceAsc",
        component:FilteredAscComponent
    },
    {
        path:"signup",
        component:NewUserComponent
    }
] 

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}