import { FrontViewComponent } from './front-view.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FrontViewComponent,
    children: [
      { path: 'tuts', component: TutorialsComponent },
      { path: 'announcements', component: AnnouncementsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'reach-us', component: ReachUsComponent },
      { path: 'portfolio', component: PortfolioComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontViewRoutingModule { }
