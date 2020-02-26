import { Component, OnInit } from '@angular/core';
import { FirebaseProvider} from '../../providers/firebase'
@Component({
  selector: 'app-linha302-a',
  templateUrl: './linha302-a.page.html',
  styleUrls: ['./linha302-a.page.scss'],
})
export class Linha302APage implements OnInit {
  Linha302AV: any;
  Linha302AP: any;
  Linha302AU: any;
  Linha302AI: any;
  Ida = true;
  Volta = false;
 

  constructor(
    private firebaseProvider: FirebaseProvider
  ) { 
    this.getLinha302AV(), this.getLinha302AP(), this.getLinha302AU(), this.getLinha302AI()
  }
  
  getLinha302AV(){
    this.firebaseProvider.getLinha302AV() 
    .then((r) => {
      this.Linha302AV = r;
    })

  }
  getLinha302AP(){
    this.firebaseProvider.getLinha302AP() 
    .then((r) => {
      this.Linha302AP = r;
    })

  }
  getLinha302AU(){
    this.firebaseProvider.getLinha302AU() 
    .then((r) => {
      this.Linha302AU = r;
    })

  }
  getLinha302AI(){
    this.firebaseProvider.getLinha302AI() 
    .then((r) => {
      this.Linha302AI = r;
    })

  }

  ida302a(){
  this.Ida = true;
  this.Volta = false;
  }
  volta302a(){
  this.Ida = false;
  this.Volta = true;
  }

   

  

  ngOnInit() {
  }

}
