import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Form fields
  firstName = '';
  lastName = '';
  company = '';
  jobTitle = '';
  country = '';
  phone = '';
  email = '';
  service = '';
  message = '';

  // State management
  isLoading = false;
  successMessage = '';
  errorMessage = '';
  
  private readonly apiUrl = 'http://localhost:5000/api/contact';

  // EmailJS Configuration (make readonly)
  private readonly emailjsConfig = {
    serviceId: 'service_jwpimfb',
    templateId: 'template_rqnewbj',
    publicKey: '2smLy7ekuzjYvz1yF'
  };

  constructor(private http: HttpClient) {
    emailjs.init(this.emailjsConfig.publicKey);
  }

  async submitForm(event: Event) {
    event.preventDefault();
    
    if (!this.firstName?.trim() || !this.email?.trim() || !this.service) {
      this.errorMessage = 'First Name, Email, and Service are required';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const formData = {
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      company: this.company.trim(),
      jobTitle: this.jobTitle.trim(),
      country: this.country.trim(),
      phone: this.phone.trim(),
      email: this.email.trim(),
      service: this.service,
      message: this.message.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      // 1. First try EmailJS
      const emailjsResponse = await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        formData
      );
      console.log('EmailJS success:', emailjsResponse);
      this.successMessage = 'Thank you! We\'ll contact you soon.';
      
      // 2. Then try backend (regardless of EmailJS success)
      try {
        await this.saveToBackend(formData);
      } catch (backendError) {
        console.warn('Backend save failed (email was sent):', backendError);
      }
      
    } catch (emailjsError) {
      console.warn('EmailJS failed, trying backend only:', emailjsError);
      
      // 3. Fallback to backend only
      try {
        await this.saveToBackend(formData);
        this.successMessage = 'Thank you! (Your message was saved but email failed)';
      } catch (backendError) {
        console.error('Both methods failed:', backendError);
        this.errorMessage = this.getErrorMessage(backendError);
      }
    } finally {
      this.isLoading = false;
      if (this.successMessage) {
        this.resetForm();
      }
    }
  }

  private async saveToBackend(formData: any): Promise<void> {
    const response = await this.http.post(this.apiUrl, formData, { 
      observe: 'response',
      headers: { 'Content-Type': 'application/json' }
    }).toPromise();

    if (!response || response.status !== 201) {
      throw new Error(`Unexpected status: ${response?.status}`);
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return error.error?.message || `Server error (${error.status})`;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'Submission failed. Please try again or contact us directly.';
  }

  private resetForm() {
    // Reset all form fields
    this.firstName = '';
    this.lastName = '';
    this.company = '';
    this.jobTitle = '';
    this.country = '';
    this.phone = '';
    this.email = '';
    this.service = '';
    this.message = '';
    
    // Clear messages after 5 seconds
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000);
  }
}