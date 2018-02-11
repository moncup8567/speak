import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { CategoryInfo } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  @Input() dataEdit: CategoryInfo;
  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  cloas() {
    this.ngbActiveModal.dismiss();
  }

  add(data: NgForm) {
    console.log(data);
    this.ngbActiveModal.close(data.value);
  }

}
