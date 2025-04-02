import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
