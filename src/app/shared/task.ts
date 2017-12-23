
export class Task{
    name: String;
    DueDate: Date;
    status: String;

    static CreateDefault(): Task {
      return new Task();
  }
  }