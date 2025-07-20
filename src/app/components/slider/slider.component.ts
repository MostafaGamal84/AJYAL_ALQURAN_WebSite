import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

interface TestimonialSlide {
  image: string;
  title: string;
  gender?: string;
  subtitle: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  slides: TestimonialSlide[] = [
     {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.فاطمة عثمان (حفص - قالون)',
    gender: 'طالبة',
    subtitle: 'حفص مع أ. أمل أبو الفتوح - قالون مع أ. سماح حسين',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. أسماء سعيد( عاصم وقالون)',
    gender: 'طالبة',
    subtitle: 'عاصم مع أ. هبة محمد - قالون مع أ. عزة عطا',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. أمل كامل (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. فاطمة عثمان',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. ايمان كامل (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. فاطمة عثمان',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. آيات عاطف(حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. فاطمة عثمان',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. إيمان صلاح (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. فاطمة عثمان',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. شيماء محمد (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. فاطمة أحمد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. آلاء عبد الباسط (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. عبير النيل',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. أسماء عبد الفتاح (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إيمان زكريا',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'صفاء كامل (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إلهام رشاد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.شيماء ابو النور (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إلهام رشاد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.ماريا سمير (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إلهام رشاد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. أمة الملك سمير(حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إيمان السيد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. ياسمين الداعري(حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إيمان السيد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.إسراء نعيم (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. إيمان السيد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. ندي احمد عيد (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. الشيماء الصيفي',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.مريم علي عبد الله(عاصم)',
    gender: 'طالبة',
    subtitle: 'مع أ. أمل أبو الفتوح',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'مريم محمود (حفص)',
    gender: 'طالبة',
    subtitle: 'مع أ. أرزاق محمد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.هويدا محمد (عاصم)',
    gender: 'طالبة',
    subtitle: 'مع أ. أمل أبو الفتوح',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.أميرة محمد (عاصم)',
    gender: 'طالبة',
    subtitle: 'مع أ. أمل أبو الفتوح',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.رحاب خالد',
    gender: 'طالبة',
    subtitle: 'مع أ. أرزاق محمد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ.شيماء عبد الكريم',
    gender: 'طالبة',
    subtitle: 'مع أ. أرزاق محمد',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أسماء علي',
    gender: 'طالبة',
    subtitle: 'مع أ. هند رجب',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'أ. نهى عمارة',
    gender: 'طالبة',
    subtitle: 'مع أ. هند رجب',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'سلوى كامل',
    gender: 'طالبة',
    subtitle: 'مع أ. إيمان زكريا',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'ندا عمر',
    gender: 'طالبة',
    subtitle: 'مع أ. عبير النيل',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/girl.jpg',
    title: 'سحر الشيمي',
    gender: 'طالبة',
    subtitle: 'مع أ. عبير النيل',
  },

  // ♂️ Male Students
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'د.أحمد هنداوي',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ رمضان ربيع',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'أ.ٲنس محمد حسني (اجازة عاصم)',
    gender: 'طالب',
    subtitle: 'مع المعلم إيهاب صلاح',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'أ.معتز عادل',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ معتز نايل',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'أ.محمد رضوان',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ مصطفى النص',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'أ.يحيى السميني (اجازة عاصم)',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ أحمد فكري',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'أ.أسامة يوسف',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ أحمد أبوبكر',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'د.محمود الديب',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ أحمد أبوبكر',
  },
  {
    image: 'https://ajyalalquran.somee.com/assets/images/boy.jpg',
    title: 'أ.أحمد يحيى',
    gender: 'طالب',
    subtitle: 'مع المعلم الشيخ أحمد سعد',
  }
    
  ];

  private swiper: Swiper | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper(): void {
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
      },
    });
  }
}
