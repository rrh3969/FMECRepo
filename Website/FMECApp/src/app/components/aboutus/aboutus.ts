import { Component } from '@angular/core';
import { Accordian } from '../accordian/accordian';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [Accordian, NgbModule, CommonModule],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
  visions = [
    {title: 'Respect for Heritage', content: 'We cherish the heritage of the fire service and the contributions of firefighters throughout history, valuing their courage, sacrifice, and selflessness.'},
    {title: 'Education and Awareness', content: 'We are dedicated to providing exceptional educational experiences that promote fire safety, emergency preparedness, and the importance of community fire prevention.'},
    {title: 'Preservation and Conservation', content: 'We commit ourselves to preserving and protecting our extensive collection of firefighting artifacts, documents, and memorabilia for future generations to appreciate and learn from.'},
    {title: 'Integrity and Authenticity', content: 'We maintain the highest standards of authenticity, accuracy, and transparency in our exhibitions, educational materials, and historical interpretations.'},
    {title: 'Community Engagement', content: 'We actively engage with our local community and beyond, fostering partnerships and collaborations that promote fire safety and a sense of unity.'},
    {title: 'Continuous Improvement', content: 'We constantly strive for excellence, seeking innovative ways to enhance our exhibits, programs, and services.'},
    {title: 'Empathy and Support', content: 'We show empathy and support for firefighters and their families, recognizing the challenges they face and providing a platform to honor their contributions.'},
    {title: 'Inclusivity and Accessibility', content: 'We welcome all individuals and communities, ensuring our center is accessible and accommodating to diverse audiences.'},
    {title: 'Volunteerism and Dedication', content: 'We appreciate and recognize the essential role played by our dedicated volunteers, who contribute their time and expertise to the success of our organization.'},
    {title: 'Sustainable Stewardship', content: 'We are committed to responsible stewardship of our resources, promoting environmentally conscious practices wherever practical in our operations.'},
  ];
}
