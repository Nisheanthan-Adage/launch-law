import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'fe-repo';

  handleLetsTalk() {
    console.log('handling let\'s talk');
  }
}
