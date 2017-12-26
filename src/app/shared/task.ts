
export class Task{
    name: String;
    DueDate: Date;
    status: String;
    label: String;
    static CreateDefault(): Task {
      return new Task();
  }
  }