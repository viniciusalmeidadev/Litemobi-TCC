import { Component, OnInit } from '@angular/core';
import { FirebaseProvider} from '../../providers/firebase'

@Component({
  selector: 'app-linha340',
  templateUrl: './linha340.page.html',
  styleUrls: ['./linha340.page.scss'],
})
export class Linha340Page implements OnInit {
  Linha340V: any;
  Linha340P: any;
  Linha340U: any;
  Linha340I: any;
  Ida = true;
  Volta = false;
  constructor(private firebaseProvider : FirebaseProvider) { 
    this.getLinha340V(), this.getLinha340P(), this.getLinha340U(), this.getLinha340I()
  }
  getLinha340V(){
    this.firebaseProvider.getLinha340V() 
    .then((r) => {
      this.Linha340V = r;
    })

  }
  getLinha340P(){
    this.firebaseProvider.getLinha340P() 
    .then((r) => {
      this.Linha340P = r;
    })

  }
  getLinha340U(){
    this.firebaseProvider.getLinha340U() 
    .then((r) => {
      this.Linha340U = r;
    })

  }
  getLinha340I(){
    this.firebaseProvider.getLinha340I() 
    .then((r) => {
      this.Linha340I = r;
    })

  }

  ida340(){
  this.Ida = true;
  this.Volta = false;
  }
  volta340(){
  this.Ida = false;
  this.Volta = true;
  }


  ngOnInit() {
  }

}
