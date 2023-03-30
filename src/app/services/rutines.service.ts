import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Rutines } from '../interfaces/rutines';
import { Observable } from 'rxjs';
import { query, where, getDocs } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class RutinesService {
  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: 'AIzaSyCi8mz0OdZ7RKvD2kIENE2-uTBsVdBmsXY',
    authDomain: 'my-ionic-app-2d764.firebaseapp.com',
    projectId: 'my-ionic-app-2d764',
    storageBucket: 'my-ionic-app-2d764.appspot.com',
    messagingSenderId: '387737105467',
    appId: '1:387737105467:web:4d5a01590b3d9e9a16d81e',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);
  auth = getAuth();
  user = this.auth.currentUser;
  userId = '';
  rutinaId: string | undefined = '';

  constructor(private fireStore: Firestore) {}

  //Enviando mis rutinas a Firebase
  addRutine(rutine: Rutines) {
    const rutineRef = collection(this.fireStore, 'rutines');
    return addDoc(rutineRef, rutine);
  }

  //Obteniendo mis rutinas de Firebase
  getRutine(): Observable<Rutines[]> {
    if (this.user !== null) {
      this.userId = this.user.uid;
    }
    let q = query(
      collection(this.db, 'rutines'),
      where('idUser', '==', this.userId)
    );
    return collectionData(q, { idField: 'id' }) as Observable<Rutines[]>;
  }
}
