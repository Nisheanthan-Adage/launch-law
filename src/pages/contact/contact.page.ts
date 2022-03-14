import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage {

  handleSendYourCase(ev: any) {
    ev.preventdefault();
    console.log('send your case clicked');
  }
}
