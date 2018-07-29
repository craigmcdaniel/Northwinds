
import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details-modal',
  template: `
    <div ngbActiveModal class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="close('Close click')">Close</button>
    </div>
  `
})
export class ProductDetailsModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input() name;
  open() {
    const modalRef = this.modalService.open(ProductDetailsModalComponent);
    modalRef.componentInstance.name = 'World';
  }
 
}


