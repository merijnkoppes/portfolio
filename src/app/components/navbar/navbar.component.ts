import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  navbarTop: string = '0';
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      // Naar beneden scrollen
      this.navbarTop = '-120px'; // Verberg de navigatiebalk (pas de waarde aan op basis van je navbar hoogte)
    } else {
      // Naar boven scrollen
      this.navbarTop = '0';
    }
    this.lastScrollTop = scrollTop;
  }

  ngOnInit(): void {}
}
