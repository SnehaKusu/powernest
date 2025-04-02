import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fundraising-services',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './fundraising-services.component.html',
  styleUrls: ['./fundraising-services.component.scss']
})
export class FundraisingServicesComponent {}



