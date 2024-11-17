import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navList = ['Home', 'Tv Shows', "News & popular", "My List", "Browse by language"];
}
