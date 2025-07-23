import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Components
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PackagesComponent } from './components/packages/packages.component';
 import { AppInViewportDirective } from './directives/app-in-viewport.directive';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Components
    AboutUsComponent,
    BackToTopComponent,
    ContactComponent,
    FeatureComponent,
    FooterComponent,
    HeaderComponent,
    OurServicesComponent,
    PackagesComponent,
    AppInViewportDirective
      
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'أجيال القرآن';
    ngOnInit(): void {
     const audio = new Audio('https://ajyalalquran.somee.com/assets/voice.mp3');
    audio.loop = true;
    audio.volume = 0.5; // adjust volume as needed
    audio.play().catch(err => {
      console.warn('Autoplay was blocked or failed.', err);
    });
  }
}

