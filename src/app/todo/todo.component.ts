import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  
  
  constructor( private toDoService: TodoService,
    public service: TodoService) { }

  ngOnInit(){
    this.resetForm();
      
  }
  
  
    
  resetForm(form ?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData={
      id: null,
      task: '',
      date : '',
      description :'',
      
    }
  }

}

