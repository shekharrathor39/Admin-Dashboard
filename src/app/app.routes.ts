import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LoginComponent } from './login/login';
import { Emplist } from './emp/emplist/emplist';
import { EmpAddEdit } from './emp/emp-add-edit/emp-add-edit';
import { ProductsComponent } from './component/product/product';
import { ViewComponent } from './component/view/view';

export const routes: Routes = [
  { path: 'create', component: EmpAddEdit },
  { path: 'update', component: EmpAddEdit },
  { path: 'login', component: LoginComponent },
  // { path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      // {path:'',redirectTo:'dashboard',},
      { path: '', component: DashboardComponent },
      { path: 'emplist', component:  Emplist},
      { path: 'product', component: ProductsComponent },
      { path: 'view', component: ViewComponent},
    ]
  },

  { path: '**', redirectTo: 'login' }

];