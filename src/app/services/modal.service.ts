import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { CategoryInfo } from '../models/category';

@Injectable()
export class ModalService {

  constructor(private ngbmodal: NgbModal) { }

  Category (dataEdit?: CategoryInfo) : NgbModalRef {
    const modal = this.ngbmodal.open(AddCategoryComponent);
    modal.componentInstance.dataEdit = dataEdit;
    return modal;
  }

}
