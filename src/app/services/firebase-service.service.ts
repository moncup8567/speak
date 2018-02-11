import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { PlofileInfo } from '../models/plofile-info';
import { Category, CategoryInfo } from '../models/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  categoryList: AngularFireList<Category>;


  constructor(private afauth: AngularFireAuth, private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  loginWithFacebook(): Promise<PlofileInfo> {

    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afauth.auth.signInWithPopup(provider);
  }

  saveCategory(data: Category) {
    this.categoryList.push(data);
  }

  getCategory(): Observable<CategoryInfo[]> {
    return this.categoryList.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    });
    }

    updateCategory(key: string, data: Category) {
      this.categoryList.update(key, data);
    }

    deleteCategory(key: string) {
      this.categoryList.remove(key);
    }

}
