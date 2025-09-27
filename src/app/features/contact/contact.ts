import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

}
