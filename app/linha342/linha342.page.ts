import { Component, OnInit } from '@angular/core';
import { FirebaseProvider} from '../../providers/firebase';

@Component({
  selector: 'app-linha342',
  templateUrl: './linha342.page.html',
  styleUrls: ['./linha342.page.scss'],
})
export class Linha342Page implements OnInit {

  Linha342V: any;
  Linha342P: any;
  Linha342U: any;
  Linha342I: any;
  Ida = true;
  Volta = false;
 

  constructor(
    private firebaseProvider: FirebaseProvider
  ) { 
    this.getLinha342V(), this.getLinha342P(), this.getLinha342U(), this.getLinha342I()
  }
  
  getLinha342V(){
    this.firebaseProvider.getLinha342V() 
    .then((r) => {
      this.Linha342V = r;
    })

  }
  getLinha342P(){
    this.firebaseProvider.getLinha342P() 
    .then((r) => {
      this.Linha342P = r;
    })

  }
  getLinha342U(){
    this.firebaseProvider.getLinha342U() 
    .then((r) => {
      this.Linha342U = r;
    })

  }
  getLinha342I(){
    this.firebaseProvider.getLinha342I() 
    .then((r) => {
      this.Linha342I = r;
    })

  }

  ida342(){
  this.Ida = true;
  this.Volta = false;
  }
  volta342(){
  this.Ida = false;
  this.Volta = true;
  }

  ngOnInit() {
  }

}
