import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'app-linha341',
  templateUrl: './linha341.page.html',
  styleUrls: ['./linha341.page.scss'],
})
export class Linha341Page implements OnInit {
  Linha341V: any;
  Linha341P: any;
  Linha341U: any;
  Linha341I: any;
  Ida = true;
  Volta = false;

  constructor(private firebaseProvider : FirebaseProvider) { 

    this.getLinha341V(), this.getLinha341P(), this.getLinha341U(), this.getLinha341I()
  }

  getLinha341V(){
   this.firebaseProvider.getLinha341V() 
   .then((r) => {
     this.Linha341V = r;
   })

 }
 getLinha341P(){
   this.firebaseProvider.getLinha341P() 
   .then((r) => {
     this.Linha341P = r;
   })

 }
 getLinha341U(){
   this.firebaseProvider.getLinha341U() 
   .then((r) => {
     this.Linha341U = r;
   })

 }
 getLinha341I(){
   this.firebaseProvider.getLinha341I() 
   .then((r) => {
     this.Linha341I = r;
   })

 }

 ida341(){
 this.Ida = true;
 this.Volta = false;
 }
 volta341(){
 this.Ida = false;
 this.Volta = true;
 }

  ngOnInit() {
  }

}
