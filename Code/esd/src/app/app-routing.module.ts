import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminuploadComponent } from './adminupload/adminupload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchdashboardComponent } from './searchdashboard/searchdashboard.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "admin", component:AdmindashboardComponent},
  {path: "upload", component:AdminuploadComponent},
  {path: "searchproduct", component:SearchdashboardComponent},
  {path:"", component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
