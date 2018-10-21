
import { Component, Input, ViewChild } from '@angular/core';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details-modal',
  template: ` <div class="modal-header">
  <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
  <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <form>
    <div class="form-group">
      <label for="dateOfBirth">Date of birth</label>
      <div class="input-group">
        <input id="dateOfBirth" class="form-control" placeholder="yyyy-mm-dd" name="dp" ngbDatepicker #dp="ngbDatepicker">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary calendar" (click)="dp.toggle()" type="button"></button>
        </div>
      </div>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
</div> `
})
export class ProductDetailsModalComponent {

  @ViewChild('modal')
  modal: 'ProductDetailsModalComponent';
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  @Input() name;
  open(content) {
    this.modalService.open(content, ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

