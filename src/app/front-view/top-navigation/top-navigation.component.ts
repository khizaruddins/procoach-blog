import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass']
})
export class TopNavigationComponent implements OnInit {

  constructor() { }
  mainLinkList = [
    { id: 1, name: 'Tutorials', link: '/tuts' },
    { id: 2, name: 'Announcements', link: '/announcements' },
    { id: 3, name: 'Portfolio', link: '/portfolio' },
    { id: 4, name: 'Projects', link: '/projects' },

  ]

  authLink = [
    { id: 1, name: 'Reach Us', link: '/reach-us' },
    { id: 2, name: 'Login', link: '/login' }
  ]

  ngOnInit(): void {
  }

}
