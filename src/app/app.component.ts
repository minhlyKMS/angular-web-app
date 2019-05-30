import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First App';
  opened = false;
  sidebarPosition = 'left';
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {} 

  execOnLogin($event: any) {
    console.log('here', $event);
  }

  closeSideBar() {
    this.opened = false;
  }

  onLoginClick() {
    console.log('open login form');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
