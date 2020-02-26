import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController} from '@ionic/angular';
import { Router } from "@angular/router"
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = true;
  register = false;

  loginForm = {
    email: '',
    password: ''
  };

  registerForm = {
    email: '',
    password: '',
    name: ''
  };

  constructor(
    public navCtrl: NavController,private loadingCtrl: LoadingController, 
    private router: Router,
    private authProvider: AuthProvider,
    private firebaseProvider: FirebaseProvider,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private storage : Storage
  ) { }

 

  fazerLogin(){
    this.authProvider.login(this.loginForm).then((res) =>{
      let uid = res.user.uid;
      this.firebaseProvider.getUser(uid).then((res)=>{
        let data = res.data();
        this.storage.set('usuario', data).then((res)=>{
          this.router.navigate(['map-track']);
        })
      })
    })
    .catch((err)=>{
      console.log('erro');
    })
  }

  criarNovaConta(){
    this.authProvider.register(this.registerForm).then((res)=>{
      let uid = res.user.uid;

      let data ={
        uid : uid,
        name: this.registerForm.name,
        email: this.registerForm.email
      };

      this.firebaseProvider.postUser(data).then((res)=>{
        console.log('sucesso')
      })
    })
  }

  exibirLogin(){
    this.login = true;
    this.register = false;
  }

  exibirRegister(){
    this.login = false;
    this.register = true;
  }

  ngOnInit() {
  }

}
