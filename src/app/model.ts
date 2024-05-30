export class Model {
    user;
    items;
    constructor() {
        this.user = 'Zehra';
        this.items = [
            new TodoItem("Spor",true),
            new TodoItem("Kitap Okumak",false),
            new TodoItem("Sinema",false),
            new TodoItem("Kahvaltı",false),
          
        ];

    }
}
export class TodoItem {
    constructor(description: string, action: boolean) {
      this.description = description;
      this.action = action;
    }
  
    description: string;
    action: boolean;
  }
  
