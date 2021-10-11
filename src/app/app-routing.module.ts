import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollCoursesComponent } from './enroll-courses/enroll-courses.component';
import { HomeVenueComponent } from './home-venue/home-venue.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'homeVenue', component: HomeVenueComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'enroll', component: EnrollCoursesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
