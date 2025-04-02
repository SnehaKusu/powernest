import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule for <router-outlet>

@Component({
  selector: 'app-solutions',
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, RouterModule], // ✅ Add CommonModule and RouterModule
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  // Component logic here (if needed)
}