import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  companyName = 'أجيال القرآن';
  
  socialLinks = [
  {
    icon: 'youtube',
    url: 'https://youtube.com/@ajyal_elpraan?si=DtyVJ8hdBoWbC_1V',
    ariaLabel: 'شاهد قناتنا الأولى على يوتيوب'
  },
  {
    icon: 'youtube',
    url: 'https://youtube.com/@agyal-alqoran?si=CLZECCURk8jHZvm_',
    ariaLabel: 'شاهد قناتنا الثانية على يوتيوب'
  },
  {
    icon: 'telegram',
    url: 'https://youtube.com/@agyal-alqoran?si=CLZECCURk8jHZvm_',
    ariaLabel: 'انضم إلى قناتنا على تيليجرام'
  }
];

  quickLinks = [
    { path: '/about', text: 'من نحن' },
    { path: '/features', text: 'الميزات' },
    { path: '/our-services', text: 'خدماتنا' },
    { path: '/contact', text: 'اتصل بنا' }
  ];

  contactInfo = {
    email: 'allhghayte8@gmail.com',
    phone: '+201099381081',
    address: '123 شارع الأعمال، المدينة، البلد'
  };

  /**
   * Scroll to a section when clicking a navigation link.
   * @param event - The click event from the navigation link.
   */
  scrollTo(event: Event): void {
    event.preventDefault();
    const element = event.target as HTMLAnchorElement;
    const targetId = element.getAttribute('routerLink')?.replace('/', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
