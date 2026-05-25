import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LoginComponent } from './login/login';
import { Emplist } from './emp/emplist/emplist';
import { EmpAddEdit } from './emp/emp-add-edit/emp-add-edit';
import { ProductsComponent } from './component/product/product';
import { ViewComponent } from './component/view/view';
import { AuthGuard } from './guards/auth.guard/auth.guard';
import { LoginGuard } from './guards/login.guard/login.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'create', component: EmpAddEdit, canActivate: [AuthGuard] },
  { path: 'update', component: EmpAddEdit, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'emplist', component: Emplist },
      { path: 'product', component: ProductsComponent },
      { path: 'view', component: ViewComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];