import { Component, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  modalRef: BsModalRef;
  isLoggedIn = false;
  userInfo: any;

  @Output() execHambugerButtonToggle = new EventEmitter();

  constructor(private modalService: BsModalService) { }

  execOnLogin(userInfo: any) {
    this.isLoggedIn = true;
    this.userInfo = userInfo;
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onHambugerButtonClick() {
    this.execHambugerButtonToggle.emit();
  }
}
