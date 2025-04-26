import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutCitizensComponent } from './pages/about-citizens/about-citizens.component';
import { MembersComponent } from './pages/members/members.component';
import { SchemesComponent } from './pages/schemes/schemes.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OfficersComponent } from './pages/officers/officers.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminAuthGuard } from './auth/admin-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about-citizens', component: AboutCitizensComponent },
  { path: 'members', component: MembersComponent },
  { path: 'schemes', component: SchemesComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'officers', component: OfficersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**' , component : HomeComponent},
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
