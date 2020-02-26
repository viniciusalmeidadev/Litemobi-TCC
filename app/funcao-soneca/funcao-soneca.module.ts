import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuncaoSonecaPage } from './funcao-soneca.page';

const routes: Routes = [
  {
    path: '',
    component: FuncaoSonecaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FuncaoSonecaPage]
})
export class FuncaoSonecaPageModule {

  
}
