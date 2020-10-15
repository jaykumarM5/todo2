import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  title:string;
  description: string;
  item_date:Date;
  todoList:any;
  todoObject:any;

  constructor() {
    this.title='';
    this.description='';
    this.item_date=new Date();
    this.todoList=[];
  }
  addItem(event){
    this.todoObject={
      id:this.todoList.length+1,
      title:this.title,
      description:this.description,
      item_date:this.item_date,
    }
    this.todoList.push(this.todoObject);
    this.title='';
    this.description='';
    event.preventDefault();
  }
  deleteItem(index){
    this.todoList.splice(index,1);
  }  

  ngOnInit(): void {
  }

}
