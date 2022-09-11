import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isTop = true;
  options = [
    { name: 'About Me', anchor: '#about' },
    { name: 'Contact Me', anchor: '#contact' },
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollPostitionToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPostitionToTop != 0) {
      this.isTop = false;
    } else {
      this.isTop = true;
    }
  }
}
