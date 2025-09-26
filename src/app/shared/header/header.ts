import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false;

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {}

  toggleMenu(event: Event) {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeMenu();
    }
  }

  scrollTo(sectionId: string) {
    if (this.router.url === "/") {
      document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
    } else {
      this.router.navigateByUrl("/").then(() => {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
        })
      })
    }
  }
}
