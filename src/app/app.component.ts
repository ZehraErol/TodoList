import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  alreadyHas: boolean = false;
  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);

  }
  addItem(value: string) {
    console.log(this.model)
    const itemExists = this.model.items.some(item => item.description.toLowerCase() === value.toLowerCase());
    if (itemExists) {
      this.alreadyHas = true;
      console.log("Item already exists in the list.");
      return;
    } else if (value.trim() !== "") {
      this.alreadyHas = false;

      this.model.items.push(new TodoItem(value, false));
    }
  }

}
