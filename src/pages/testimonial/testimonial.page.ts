import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Virtual, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'testimonial-page',
  templateUrl: './testimonial.page.html',
  styleUrls: ['./testimonial.page.scss']
})
export class TestimonialPage {
  customSlideConfig: SwiperOptions = {
    slidesPerView: 1,
    speed: 600,
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  slidesStore = [
    {
      id: "1",
      src: "assets/img/jhone-mark-testimonial.png",
      alt: "jhone mark img",
      title: "Jhone Mark",
      testimonial: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
    },
    {
      id: "2",
      src: "assets/img/jhone-mark-testimonial.png",
      alt: "jhone mark img",
      title: "Jhone Mark 2",
      testimonial: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
    }
  ]

  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;

  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }
}
