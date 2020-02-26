import { Component, OnInit } from '@angular/core';
import { FirebaseProvider} from '../../providers/firebase';

@Component({
  selector: 'app-linha302-b',
  templateUrl: './linha302-b.page.html',
  styleUrls: ['./linha302-b.page.scss'],
})
export class Linha302BPage implements OnInit {

  Linha302BV: any;
  Linha302BP: any;
  Linha302BU: any;
  Linha302BI: any;
  Ida = true;
  Volta = false;
 
  constructor(private firebaseProvider: FirebaseProvider) { 
    this.getLinha302BV(), this.getLinha302BP(), this.getLinha302BU(), this.getLinha302BI()

  }

  getLinha302BV(){
    this.firebaseProvider.getLinha302BV() 
    .then((r) => {
      this.Linha302BV = r;
    })

  }
  getLinha302BP(){
    this.firebaseProvider.getLinha302BP() 
    .then((r) => {
      this.Linha302BP = r;
    })

  }
  getLinha302BU(){
    this.firebaseProvider.getLinha302BU() 
    .then((r) => {
      this.Linha302BU = r;
    })

  }
  getLinha302BI(){
    this.firebaseProvider.getLinha302BI() 
    .then((r) => {
      this.Linha302BI = r;
    })

  }

  ida302b(){
  this.Ida = true;
  this.Volta = false;
  }
  volta302b(){
  this.Ida = false;
  this.Volta = true;
  }


  ngOnInit() {
  }

}
