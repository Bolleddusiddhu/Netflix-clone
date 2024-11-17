import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperComponent } from './components/swiper/swiper.component';
import { ImagePipe } from './pipes/image.pipe';
import { BrowseComponent } from './components/browse/browse.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    SwiperComponent,
    BrowseComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    ImagePipe
]
})
export class CoreModule { }
