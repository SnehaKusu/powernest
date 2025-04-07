import { Component, HostListener, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeDropdown: string | null = null;
  isMobileMenuOpen = false;
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.cdr.detectChanges();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.cdr.detectChanges();
    if (!this.isMobileMenuOpen) {
      this.activeDropdown = null;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  toggleDropdown(menu: string, event: Event) {
    event.stopPropagation();
    
    if (window.innerWidth <= 768) {
      // On mobile, toggle dropdown like an accordion
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    } else {
      // On desktop, show dropdown on hover/click
      this.activeDropdown = menu;
    }
    
    this.cdr.detectChanges();
  }

  navigateTo(route: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    
    this.router.navigateByUrl(route).then(success => {
      if (success) {
        this.activeDropdown = null;
        this.isMobileMenuOpen = false;
        this.cdr.detectChanges();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    
    if (window.innerWidth > 768) {
      if (!target.closest('.dropdown-container') && !target.closest('.dropdown-menu')) {
        this.activeDropdown = null;
        this.cdr.detectChanges();
      }
    }
  }
  
}