import { Component } from '@angular/core';
import { Ctabutton } from '../ctabutton/ctabutton';

@Component({
  selector: 'app-events',
  imports: [Ctabutton],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  registerbutton = {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSerLMYG7kzW0v9poYnYEcziI510UUiQcFp9cT3pO9Mo-9i3dg/viewform',
    type: 'btn btn-primary px-5 m-3',
    logoclass: 'bi bi-plus-lg',
    logo: 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2',
    text: 'Register',
  }
}
