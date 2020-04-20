import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { Todo } from 'src/app/shared/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
   
  formData: Todo;
  constructor( private firebasedb: AngularFireDatabase) { }

  


}
