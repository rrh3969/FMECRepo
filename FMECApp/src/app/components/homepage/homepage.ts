import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Joinbutton } from '../joinbutton/joinbutton';
import { Donatebutton } from '../donatebutton/donatebutton';

@Component({
  selector: 'app-homepage',
  imports: [NgbModule, NgbCarouselModule, CommonModule, Joinbutton, Donatebutton],
  templateUrl: '././homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  images = [
    {name: 'building.jpg', caption: 'Building'},
    {name: 'inside.jpg', caption: 'Inside'},
    {name: 'truck.jpg', caption: 'Truck'},
  ];
}
