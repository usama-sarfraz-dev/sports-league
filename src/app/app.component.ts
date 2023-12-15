import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'test';

  toggleButtonNavbar: HTMLElement | null = null;
  toggleButtonSidebar: HTMLElement | null = null;
  sidebar: HTMLElement | null = null;
  isSidebarActive: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Check if the application is running on the client side
    if (isPlatformBrowser(this.platformId)) {
      this.toggleButtonNavbar = document.querySelector('.toggle-button');
      this.toggleButtonSidebar = document.querySelector('.sidebar .toggle-button');
      this.sidebar = document.querySelector('.sidebar');
    }
  }

  toggleCategoryBody(categoryId: string): void {
    const categoryBody = document.getElementById(categoryId)?.querySelector('.category-body') as HTMLElement;
    const closeIcon = document.getElementById(categoryId)?.querySelector('.close-icon') as HTMLElement;
    
    if (categoryBody && closeIcon) {
      categoryBody.style.display = categoryBody.style.display === 'none' || categoryBody.style.display === '' ? 'block' : 'none';
      closeIcon.classList.toggle('rotate-icon');
    }
  }

  toggleSidebar(): void {
    if (this.sidebar) {
      this.sidebar.classList.toggle('active');
    }
  }
}
