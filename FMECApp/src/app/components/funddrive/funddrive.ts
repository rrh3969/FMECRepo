import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accordian } from '../accordian/accordian';
import { Ctabutton } from '../ctabutton/ctabutton';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-funddrive',
  imports: [Accordian, Ctabutton, NgbModule, CommonModule],
  templateUrl: './funddrive.html',
  styleUrl: './funddrive.css'
})
export class Funddrive {
  donatebutton = {
    link: 'https://www.paypal.com/us/fundraiser/charity/1401874',
    type: 'btn btn-success px-5 m-3 donatebtn',
    logoclass: 'bi bi-currency-dollar',
    logo: 'M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z',
    text: 'Donate'
  }

  reasons = [
    {title: 'Preserving Our Heritage', content: 'Your contribution will help us maintain and protect our priceless collection, ensuring that the stories and sacrifices of past firefighters are preserved for future generations.'},
    {title: 'Enhancing Education', content: 'By supporting us, you enable our team to develop engaging and informative educational programs that promote fire safety awareness and emergency preparedness, helping to reduce fire-related accidents and injuries in our community.'},
    {title: 'Expanding Community Outreach', content: 'Your support will empower us to reach a broader audience through interactive exhibits, workshops, and outreach events, spreading essential fire safety messages throughout our neighborhoods.'},
    {title: 'Improving Accessibility', content: 'We strive to make our museum accessible to all, and your donation can help us create accessible spaces and programs, ensuring that everyone can experience the history and lessons of firefighting.'},
    {title: 'Inspiring Future Firefighters', content: 'By investing in our museum, you are inspiring the next generation of firefighters, encouraging them to embrace bravery, dedication, and a commitment to service.'},
    {title: 'Creating Lasting Impact', content: 'Your donation will have a tangible and lasting impact, leaving a positive legacy within our community and contributing to a safer environment for years to come.'},
  ]
}
