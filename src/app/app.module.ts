import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import {firebaseConfig} from './firebase.config';
import { FirebaseService } from './services/firebase-service.service';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './services/modal.service';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const routes: Routes = [
  { path: 'category', component: CategoryComponent},
  { path: 'home' , component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
  AddCategoryComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule,
    AngularFireDatabaseModule
  ],
  entryComponents:[AddCategoryComponent],
  providers: [FirebaseService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
