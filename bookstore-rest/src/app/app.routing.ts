/**
 * Created by z00382545 on 1/16/17.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookDetailComponent} from './components/book-detail/book-detail.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bookList',
    component: BookListComponent
  },
  {
    path: 'bookDetail/:id',
    component: BookDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
