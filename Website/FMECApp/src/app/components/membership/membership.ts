import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ctabutton } from '../ctabutton/ctabutton';
import { Accordian } from '../accordian/accordian';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-membership',
  imports: [Accordian, NgbModule, CommonModule, Ctabutton],
  templateUrl: './membership.html',
  styleUrl: './membership.css',
})
export class Membership {
  joinbutton = {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd_h9uWIKDUe0MYc0NBHoZn5M7asCCZ8pUdgW8bp9exNpS2XQ/viewform',
    type: 'btn btn-primary px-5 m-3',
    logoclass: 'bi bi-plus-lg',
    logo: 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2',
    text: 'Join',
  }
  
  reasons = [
    {title: 'Preserving History', content: 'FMEC plays a crucial role in preserving the rich history and heritage of firefighting in Western New York. By volunteering, individuals can actively contribute to the preservation and conservation of firefighting artifacts, documents, and memorabilia for future generations to learn from and appreciate.'},
    {title: 'Supporting Firefighters', content: 'Volunteering with us is a way to show appreciation and support for firefighters and their contributions to society. It allows individuals to honor the bravery, sacrifice, and dedication of these heroes by actively promoting their stories and the challenges they face.'},
    {title: 'Promoting Fire & Life Safety', content: 'FMEC offers several educational programs and workshops aimed at promoting fire safety awareness and emergency preparedness within the community. Volunteers can play an essential role in spreading these crucial messages, helping to prevent fire-related accidents and injuries.'},
    {title: 'Community Engagement', content: 'Volunteering at FMEC provides an opportunity to connect with the local community and beyond. Volunteers can engage with visitors of all ages, interact with school groups, and participate in community events, fostering a sense of unity and camaraderie.'},
    {title: 'Learning Opportunities', content: 'The FMEC rich with historical knowledge and captivating stories. Volunteers can gain valuable insights into firefighting history, technology, and techniques, as well as the broader history of their local community.'},
    {title: 'Hands-On Experience', content: 'Volunteering at the Exhibit Center may offer hands-on experiences that allow individuals to interact with historical firefighting equipment, artifacts, and exhibits. This engagement can be both educational and exciting.'},
    {title: 'Personal Growth', content: 'Volunteering provides opportunities for personal growth and skill development. Volunteers can enhance their communication, organizational, and teamwork skills while also gaining a sense of accomplishment through their contributions.'},
    {title: 'Building Connections', content: 'Volunteering often brings people together with shared interests and passions. Volunteers can build meaningful connections with fellow volunteers, staff, and museum visitors, expanding their social networks.'},
    {title: 'Making a Difference', content: 'Every volunteer\'s efforts directly contribute to the success of the fire museum and its mission. Whether it\'s helping with guided tours, organizing events, or supporting educational initiatives, volunteers play a crucial role in making a positive impact.'},
    {title: 'Flexibility and Time Commitment', content: 'Volunteering with us is flexible, allowing individuals to contribute based on their availability and interests. Whether someone has a few hours to spare each week or a specific skill set to offer, there is often a place for everyone to contribute.'},
  ];
}
