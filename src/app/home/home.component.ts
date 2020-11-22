import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks = [{
    name: "party",
    done: "Not done",
  },
  {
    name: "coding",
    done: "Done",
  }
  ]
  task = " ";
  i = 0;
  condition = false;
  constructor() { }
  ngOnInit(): void {
  }
  addTask(newTask) {
    var newTodo = {
      name: newTask,
      done: "Not done",
    };
    if (newTodo.name == '') {
      this.condition = true;
      return;
    } else {
      this.condition = false;
    }
    this.tasks.push(newTodo);
    console.log(this.tasks);
  }
  deleteTask(deleteTask) {
    this.tasks = this.tasks.filter(t => t.name !== deleteTask.name)
  }

  doneTask(updateTask) {
    console.log("update");
    updateTask.done = "Done";
  }

}
