import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { isLoggedInGuard, loginPageGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [loginPageGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [isLoggedInGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
