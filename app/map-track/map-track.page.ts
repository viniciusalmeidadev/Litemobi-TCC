import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Platform, AlertController } from '@ionic/angular';
import { FuncaoSonecaPage } from '../funcao-soneca/funcao-soneca.page';

declare var google;

@Component({
  selector: 'app-map-track',
  templateUrl: './map-track.page.html',
  styleUrls: ['./map-track.page.scss'],
  providers: [AngularFireAuth, FuncaoSonecaPage]
})
export class MapTrackPage  {

  locations: Observable<any>;
  locationsColletion: AngularFirestoreCollection<any>;
  user=null;
  distance : any;
  ponto: any;
  ponto2: any;

  



  @ViewChild('map', {static : false}) mapElement: ElementRef;
  map: any;
  markers = [];
  latLng: any;

  public localCerto = false;
  varqlq: any;
  latLngi;
  watch= null;
  ptEtec;
  ptShop;

 

  
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, 
    public platform : Platform, public alertController: AlertController,
    public funcaoSoneca: FuncaoSonecaPage) {
    this.anonLogin();
    
    
   
  
    this.platform.ready().then(()=>{
      
    })
   
  }



  ionViewWillEnter(){
    this.loadMap();
    this.calcularDistancia();
    this.adicionarMarcador();

  }
  


  



  loadMap(){
    
    let latLng = new google.maps.LatLng( -22.87245, -47.2108749);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
  }

 
 
  anonLogin(){
    this.afAuth.auth.signInAnonymously().then(res =>{
      this.user = res.user;
      console.log(this.user);
      this.locationsColletion = this.afs.collection(
        `locations/eyjqv9zRtMdWn2mBwTiNxpXujLL2/track`,
       
        ref => ref.orderBy('timestamp')
      );
      //load firebase data
      this.locations = this.locationsColletion.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data}
          }

          ))
      );
      //update map
      this.locations.subscribe(locations =>{ 
        console.log('new location: ', locations);
        this.updateMap(locations);
        
      })
    });
   
  }

  

  updateMap(locations){
   

    for(let loc of  locations){
      
      let latLng = new google.maps.LatLng(loc.lat, loc.lng);
      
     

      this.latLngi = latLng;
      this.ptEtec = this.funcaoSoneca.pontoEtec();
      this.calcularDistancia();
      this.adicionarMarcador();
    }
   
}

  adicionarMarcador(){
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];

    let marker = new google.maps.Marker({
      position: this.latLngi,
      animation: google.maps.Animation.DROP,
      map:this.map
    });  
    this.markers.push(marker);


  }
  calcularDistancia(){
    var locPonto = new google.maps.LatLng(this.ptEtec.lat,this.ptEtec.long);
     

    var distanciaAteOPonto = google.maps.geometry.spherical.computeDistanceBetween(this.latLngi, locPonto);
    console.log(distanciaAteOPonto);
    if(distanciaAteOPonto < 150.00){
 
      this.presentAlert();

    }

  }

  addNewLocation(lat, lng, timestamp){
  

    let position = new google.maps.LatLng(lat, lng);
    this.map.setCenter(position);
    this.map.setZoom(5);

  }
  async presentAlert() {
   const alert = await this.alertController.create({
     header: 'Chegou!',
     subHeader: '',
     message: 'Você chegou ao seu destino!!',
     buttons: ['OK']
   });
 
   await alert.present();
 }

 

 pontoEtec(){
  this.ptEtec = this.funcaoSoneca.pontoEtec();
  
 }

 pontoShop(){
   this.ptShop = this.funcaoSoneca.pontoShop();
 }

}

   



