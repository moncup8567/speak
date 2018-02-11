import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, CategoryInfo } from '../../models/category';
import { FirebaseService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categoryInfo: CategoryInfo[];

  constructor(
    private modalService: ModalService,
    private firebaseService: FirebaseService
    ) {  }

  ngOnInit() {
   this.firebaseService.getCategory().subscribe((item) => {
     this.categoryInfo = item;
   });
  }

  add() {
    this.modalService.Category().result.then((response: Category) => {
      this.firebaseService.saveCategory(response);
    }, () => { });
  }

  edit(data: CategoryInfo) {
    this.modalService.Category(data).result.then((response: Category) => {
      this.firebaseService.updateCategory(data.key, response);
    }, () => { });
  }

  delete(data: CategoryInfo) {
 
      this.firebaseService.deleteCategory(data.key);
  }

}
