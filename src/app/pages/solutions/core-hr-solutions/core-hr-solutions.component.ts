import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Ensure CommonModule is imported

@Component({
  selector: 'app-core-hr-solutions',
  standalone: true,
  imports: [CommonModule], // ✅ Fix: Import CommonModule for common directives
  templateUrl: './core-hr-solutions.component.html',
  styleUrls: ['./core-hr-solutions.component.scss'] // ✅ Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class CoreHrSolutionsComponent {}
