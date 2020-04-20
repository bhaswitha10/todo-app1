import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  formData: Todo;

  constructor(public firestore:AngularFirestore) { }
  

  getTasks(){
   return this.firestore.collection('tasks').snapshotChanges();

  }
}
