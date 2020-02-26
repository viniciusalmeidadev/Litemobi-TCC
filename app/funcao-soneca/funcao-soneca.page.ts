import { Component, OnInit } from '@angular/core';



declare var google;

@Component({
  selector: 'app-funcao-soneca',
  templateUrl: './funcao-soneca.page.html',
  styleUrls: ['./funcao-soneca.page.scss'],
  
  

})
export class FuncaoSonecaPage implements OnInit {
funcaoSoneca: any;


  constructor() {
    
   }

  ngOnInit() {
  }
 
  pontoEtec(){
    var locEtec = {
      lat: -22.87245,
      long: -47.2108749,
     
    }
   
   

    return locEtec;

  
  }
  pontoShop(){
    var locShop = {
      lat: -22.87245,
      long: -47.2108749
    }
   
   

    return locShop;
   
  }



}
 