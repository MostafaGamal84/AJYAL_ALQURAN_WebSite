import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Course {
  courseNameAr: string;
  studentsCount: number;
  lessons: number;
  hours: number;
  instructorAr: string;
  instructorsAr: string[];
  image: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  isArabic = true;

  services: Course[] = [
   
  ];
}
