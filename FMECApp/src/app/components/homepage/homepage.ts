import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Ctabutton } from '../ctabutton/ctabutton';

@Component({
  selector: 'app-homepage',
  imports: [NgbModule, NgbCarouselModule, CommonModule, Ctabutton],
  templateUrl: '././homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  joinbutton = {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd_h9uWIKDUe0MYc0NBHoZn5M7asCCZ8pUdgW8bp9exNpS2XQ/viewform',
    type: 'btn btn-primary px-5 m-3',
    logoclass: 'bi bi-plus-lg',
    logo: 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2',
    text: 'Join',
  }

  donatebutton = {
    link: 'https://www.paypal.com/us/fundraiser/charity/1401874',
    type: 'btn btn-success px-5 m-3 donatebtn',
    logoclass: 'bi bi-currency-dollar',
    logo: 'M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z',
    text: 'Donate'
  }
  
  images = [
    {name: 'building.jpg', caption: 'Building'},
    {name: 'inside.jpg', caption: 'Inside'},
    {name: 'truck.jpg', caption: 'Truck'},
  ];
}
