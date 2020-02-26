import { Component, OnInit} from '@angular/core';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  linhas = true;
linha332 = false;
linha340 = false;
ida_340 =  false;
volta_340 = false;
ida_332 = false;
volta_332 = false;
linhasEmBreve = false;



  constructor(public navCtrl: NavController) {}

  exibirLinha332(){
    this.linha332 = true;
    this.linha340 = false;
    this.linhas = false;
    this.ida_332 = true;
    this.volta_332 = false;
}

exibirLinha340(){
    this.linha332 = false;
    this.linha340 = true;
    this.linhas = false;
    this.ida_340 = true;
    this.volta_340 = false;
}
exibirLinha310(){
  this.linhasEmBreve = true;
  this.linha332 = false;
    this.linha340 = false;
    this.linhas = false;
    this.ida_340 = false;
    this.volta_340 = false;
}
exibirLinha342(){
  this.linhasEmBreve = true;
  this.linha332 = false;
    this.linha340 = false;
    this.linhas = false;
    this.ida_340 = false;
    this.volta_340 = false;
}
exibirLinha320(){
  this.linhasEmBreve = true;
  this.linha332 = false;
    this.linha340 = false;
    this.linhas = false;
    this.ida_340 = false;
    this.volta_340 = false;
}
exibirLinha341(){
  this.linhasEmBreve = true;
  this.linha332 = false;
    this.linha340 = false;
    this.linhas = false;
    this.ida_340 = false;
    this.volta_340 = false;
}
exibirLinha331(){
  this.linhasEmBreve = true;
  this.linha332 = false;
    this.linha340 = false;
    this.linhas = false;
    this.ida_340 = false;
    this.volta_340 = false;
}
exibirLinhas(){
 this.linha332 = false;
 this.linha340 = false;
 this.linhas = true;
}

voltar(){
     this.linha332 = false;
 this.linha340 = false;
 this.linhas = true;
 this.linhasEmBreve = false;
}

voltare(){
     this.linha332 = false;
 this.linha340 = false;
 this.linhas = true;
}
volta340(){
  this.ida_340 = false;
  this.volta_340 =true;
}
ida340(){
  this.ida_340 = true;
  this.volta_340 = false;
}

ida332(){
  this.ida_332 = true;
  this.volta_332 = false;
}
volta332(){
  this.volta_332 = true;
  this.ida_332 = false;
}


ngOnInit() {
}
}
