import { Component, OnInit } from '@angular/core';
import { FirebaseProvider} from '../../providers/firebase';

@Component({
  selector: 'app-linha311',
  templateUrl: './linha311.page.html',
  styleUrls: ['./linha311.page.scss'],
})
export class Linha311Page implements OnInit {
  Linha311V: any;
  Linha311P: any;
  Linha311U: any;
  Linha311I: any;
  Ida = true;
  Volta = false;

  constructor(private firebaseProvider : FirebaseProvider) {
    this.getLinha311V(), this.getLinha311P(), this.getLinha311U(), this.getLinha311I()
   }

   getLinha311V(){
    this.firebaseProvider.getLinha311V() 
    .then((r) => {
      this.Linha311V = r;
    })

  }
  getLinha311P(){
    this.firebaseProvider.getLinha311P() 
    .then((r) => {
      this.Linha311P = r;
    })

  }
  getLinha311U(){
    this.firebaseProvider.getLinha311U() 
    .then((r) => {
      this.Linha311U = r;
    })

  }
  getLinha311I(){
    this.firebaseProvider.getLinha311I() 
    .then((r) => {
      this.Linha311I = r;
    })

  }

  ida311(){
  this.Ida = true;
  this.Volta = false;
  }
  volta311(){
  this.Ida = false;
  this.Volta = true;
  }

  ngOnInit() {
  }

}
