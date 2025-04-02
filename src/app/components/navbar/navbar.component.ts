import { Component, HostListener, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeDropdown: string | null = null;
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); // Inject ChangeDetectorRef

  // 🔹 Function to Toggle Dropdowns
  toggleDropdown(menu: string, event: Event) {
    event.stopPropagation();
    console.log("Dropdown Clicked:", menu);
    console.log("Active Dropdown Before:", this.activeDropdown);

    this.activeDropdown = this.activeDropdown === menu ? null : menu;

    console.log("Active Dropdown After:", this.activeDropdown);
    this.cdr.detectChanges(); // ✅ Ensure UI updates
  }

  // 🔹 Function to Navigate & Close Dropdown
  navigateTo(route: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    console.log("🔹 Attempting to Navigate to:", route);

    this.router.navigateByUrl(route).then(success => {
      if (success) {
        console.log("✅ Navigation successful:", route);
        this.activeDropdown = null; // ✅ Close dropdown
        this.cdr.detectChanges(); // ✅ Ensure UI updates
      } else {
        console.error("❌ Navigation failed:", route);
      }
    }).catch(err => console.error("❌ Navigation Error:", err));
  }

  // 🔹 Auto Close Dropdown on Click Outside
  @HostListener('document:click', ['$event'])
closeDropdown(event: Event) {
  const target = event.target as HTMLElement;
  console.log("Clicked Element:", target);

  if (
    !target.closest('.dropdown-container') &&
    !target.closest('.dropdown-menu')
  ) {
    console.log("Dropdown Closed");
    this.activeDropdown = null;
    this.cdr.detectChanges();
  }
}
}