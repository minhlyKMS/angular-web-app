import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First App';
  opened = false;
  sidebarPosition = 'left';

  constructor() {}

  toggleSideBar() {
    this.opened = !this.opened;
  }
}
