import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class FirebaseProvider {
  constructor(private afs: AngularFirestore) { }


  postUser = data => this.afs.collection("Users").doc(data.uid).set(data);

  getUser(uid){
    return this.afs.firestore.collection("Users").doc(uid).get();
  }

  //Métodos Linha 302A
  getLinha302AP(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302A').where('idRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha302AI(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302A').where('idRua', '>=', 2).where('idRua', '<=', 36).orderBy('idRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha302AV(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302A').where('idRua', '>=', 2).where('idRua', '<=', 36).orderBy('idRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha302AU(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302A').where('idRua', '==', 37).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }

  //Métodos Linha 302B
 
  getLinha302BP(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302B').where('idRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha302BI(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302B').where('idRua', '>=', 2).where('idRua', '<=', 14).orderBy('idRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha302BV(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302B').where('idRua', '>=', 2).where('idRua', '<=', 14).orderBy('idRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha302BU(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha302B').where('idRua', '==', 15).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }

  //Métodos Linha 310

  getLinha310P(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha310').where('idRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha310I(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha310').where('idRua', '>=', 2).where('idRua', '<=', 34).orderBy('idRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha310V(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha310').where('idRua', '>=', 2).where('idRua', '<=', 34).orderBy('idRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha310U(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha310').where('idRua', '==', 35).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }

  //Método Linha 311

  getLinha311P(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha311').where('idRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha311I(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha311').where('idRua', '>=', 2).where('idRua', '<=', 33).orderBy('idRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha311V(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha311').where('idRua', '>=', 2).where('idRua', '<=', 33).orderBy('idRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha311U(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha311').where('idRua', '==', 34).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }

  //Métodos Linha 340

  
  getLinha340P(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha340').where('idRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha340I(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha340').where('idRua', '>=', 2).where('idRua', '<=', 32).orderBy('idRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha340V(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha340').where('idRua', '>=', 2).where('idRua', '<=', 32).orderBy('idRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha340U(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha340').where('idRua', '==', 33).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  } 

  //Métodos Linha 341

  getLinha341P(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha341').where('IdRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha341I(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha341').where('IdRua', '>=', 2).where('IdRua', '<=', 28).orderBy('IdRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha341V(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha341').where('IdRua', '>=', 2).where('IdRua', '<=',28).orderBy('IdRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha341U(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha341').where('IdRua', '==', 29).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }

  //Métodos Linha 342
  
  getLinha342P(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha342').where('IdRua', '==', 1).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha342I(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha342').where('IdRua', '>=', 2).where('IdRua', '<=', 13).orderBy('IdRua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha342V(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha342').where('IdRua', '>=', 2).where('IdRua', '<=', 13).orderBy('IdRua', 'desc').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }
  getLinha342U(){
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('Linha342').where('IdRua', '==', 14).orderBy('Rua').get()
      .then((r) => {
        let array = [];
        r.forEach((d) =>{
          let item = d.data();
          item.id = d.id; 
          array.push(item);
        });

        resolve(array);
      })
    })
  }


  }

  
    




