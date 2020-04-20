import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 list : Todo[];
  constructor( public service: TodoService,
    private firestore:AngularFirestore,
    private toastr: ToastrService) { }

    

  ngOnInit() {
    this.resetForm();
    this.service.getTasks().subscribe(actionArray =>{
      this.list = actionArray.map(item=>{
        return {
           id: item.payload.doc.id,
           ...(item.payload.doc.data() as object)
         } as Todo;
       })
     });
    
  }
  resetForm(form ?: NgForm){
    if(form != null)
     form.resetForm();
    this.service.formData={
      id : null,
      task : '',
      deadline: '',
      description: '',
    }
  }
  onSubmit(form : NgForm){
    let data =Object.assign({},form.value) ;
    delete data.id;
    if(form.value.id==null)
     this.firestore.collection('tasks').add(data);
    else
      this.firestore.doc('tasks/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully','Task');

  }

  onEdit(i : Todo){
    this.service.formData =Object.assign({},i) ;
  }
  
  onDelete(id: string){
    if(confirm("Are you sure to delete this task?")){
      this.firestore.doc('tasks/'+id).delete();
      this.toastr.warning('Deleted successfully!','To-Do App')
    }
  }
 
  
}
