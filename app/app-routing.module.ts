import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path :'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
