import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IVideoContent } from '../../models/video-content-niterface';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {

  @Input() videoContents: IVideoContent[] = [];
  @Input() title!: string;

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoContents'] && !changes['videoContents'].firstChange) {
      this.initSwiper();
    }
  }


  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

  triggerMouseEnter(event: any) {
    console.log(event, "event");
    const movieElement = event.currentTarget;
    // movieElement.style.transition = 'transform 0.3s ease'; // Smooth transition
    // movieElement.style.transform = 'scale(1.3)'; //
  }

  triggerMouseLeave(event: any) {
    const movieElement = event.currentTarget;
    // movieElement.style.transition = 'transform 0.3s ease'; // Smooth transition
    // movieElement.style.transform = 'scale(1)'; // Reset zoom
  }
}
