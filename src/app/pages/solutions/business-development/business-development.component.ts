import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Add this for navigation support

@Component({
  selector: 'app-business-development',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Include RouterModule
  templateUrl: './business-development.component.html',
  styleUrls: ['./business-development.component.scss']
})
export class BusinessDevelopmentComponent {} 
