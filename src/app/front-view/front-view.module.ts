import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontViewRoutingModule } from './front-view-routing.module';
import { FrontViewComponent } from './front-view.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { MaterialModule } from './../../material.module';


@NgModule({
  declarations: [
    FrontViewComponent,
    MainSliderComponent,
    TopNavigationComponent,
    LeftSidebarComponent,
    TutorialsComponent,
    AnnouncementsComponent,
    PortfolioComponent,
    ProjectsComponent,
    LoginComponent,
    ReachUsComponent
  ],
  imports: [
    CommonModule,
    FrontViewRoutingModule,
    MaterialModule
  ]
})
export class FrontViewModule { }
