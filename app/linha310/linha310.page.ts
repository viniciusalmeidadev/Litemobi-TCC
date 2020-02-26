import { Component, OnInit } from '@angular/core';
import { FirebaseProvider} from '../../providers/firebase';

@Component({
  selector: 'app-linha310',
  templateUrl: './linha310.page.html',
  styleUrls: ['./linha310.page.scss'],
})
export class Linha310Page implements OnInit {

  Linha310V: any;
  Linha310P: any;
  Linha310U: any;
  Linha310I: any;
  Ida = true;
  Volta = false;

  constructor(private firebaseProvider: FirebaseProvider) { 
    this.getLinha310V(), this.getLinha310P(), this.getLinha310U(), this.getLinha310I()
  }

  getLinha310V(){
    this.firebaseProvider.getLinha310V() 
    .then((r) => {
      this.Linha310V = r;
    })

  }
  getLinha310P(){
    this.firebaseProvider.getLinha310P() 
    .then((r) => {
      this.Linha310P = r;
    })

  }
  getLinha310U(){
    this.firebaseProvider.getLinha310U() 
    .then((r) => {
      this.Linha310U = r;
    })

  }
  getLinha310I(){
    this.firebaseProvider.getLinha310I() 
    .then((r) => {
      this.Linha310I = r;
    })

  }

  ida310(){
  this.Ida = true;
  this.Volta = false;
  }
  volta310(){
  this.Ida = false;
  this.Volta = true;
  }


  ngOnInit() {
  }

}
