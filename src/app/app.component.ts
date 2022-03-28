import { Component } from '@angular/core';
import { Property } from './models/property.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myProperty: Property = {
    imageUrl: 'assets/house.jpg',
    imageAlt: 'Rear view of modern home with a wide garden',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center',
    priceInCents: 190000,
    reviewCount: 34,
    rating: 4
  };
}
