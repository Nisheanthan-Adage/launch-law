import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular-material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SwiperModule } from 'swiper/angular';

// Pages
import { HomePage } from 'src/pages/home/home.page';
import { AboutUsPage } from 'src/pages/about-us/about-us.page';
import { ServicePage } from 'src/pages/our-service/service.page';
import { ContactPage } from 'src/pages/contact/contact.page';
import { OurTeamPage } from 'src/pages/our-team/our-team.page';
import { TestimonialPage } from 'src/pages/testimonial/testimonial.page';

// components
import { HeaderComponent } from 'src/components/header/header.component';
import { NavBarComponent } from 'src/components/navbar/navbar.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomePage,
    AboutUsPage,
    ServicePage,
    OurTeamPage,
    ContactPage,
    TestimonialPage,
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
