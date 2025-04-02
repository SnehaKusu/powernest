import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'powernestwebsite';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // ✅ Ensure this runs only in the browser (fixes "window is not defined" error in SSR)
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
}
