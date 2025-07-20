import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { PackagesService } from '../../services/packages.service';
import { HttpClient } from '@angular/common/http';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-packages',
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
})
export class PackagesComponent implements OnInit, AfterViewInit {
  packages: any[] = [];
  error: string | null = null;
  swiper: Swiper | null = null;
currencyField: 'priceLE' | 'priceReyal' | 'priceDollar' = 'priceDollar';
  constructor(
    private packagesService: PackagesService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.detectUserCurrencyAndLoadPackages();
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  detectUserCurrencyAndLoadPackages(): void {
  const token = 'fe3e37c3944763';
  this.http.get<{ country?: string }>(`https://ipinfo.io/json?token=${token}`).subscribe({
    next: (res) => {
      const code = res.country?.toUpperCase() || '';

      if (code === 'EG') {
        this.currencyField = 'priceLE';
      } else if (code === 'SA') {
        this.currencyField = 'priceReyal';
      } else {
        this.currencyField = 'priceDollar';
      }

      this.loadPackages();
    },
    error: () => {
      console.warn('IP detection failed, fallback to USD');
      this.currencyField = 'priceDollar';
      this.loadPackages();
    }
  });
}


  loadPackages(): void {
    this.packagesService.getPackages().subscribe({
      next: (res) => {
        this.packages = res;
        this.cdr.detectChanges();
        this.initializeSwiper();
        console.log(this.packages);
      },
      error: () => {
        this.error = 'فشل تحميل الباقات.';
      }
    });
  }

  initializeSwiper(): void {
    setTimeout(() => {
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    }, 100);
  }

 getPrice(pkg: any): string {
  console.log('Full pkg:', pkg);
  console.log('Currency field:', this.currencyField);

  switch (this.currencyField) {
    case 'priceLE':
      return pkg.priceLE != null ? `${pkg.priceLE} ج.م / الشهر` : '—';
    case 'priceReyal':
      return pkg.priceReyal != null ? `${pkg.priceReyal} ريال / الشهر` : '—';
    case 'priceDollar':
    default:
      return pkg.priceDollar != null ? `$${pkg.priceDollar} / month` : '—';
  }
}

}