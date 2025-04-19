import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutCitizensComponent,
    MembersComponent,
    SchemesComponent,
    AboutUsComponent,
    OfficersComponent,
    ReportsComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
