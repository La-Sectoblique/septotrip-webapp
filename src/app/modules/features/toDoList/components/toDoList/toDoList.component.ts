import { Component, Input, OnInit } from '@angular/core';
import {
  addTodoEntry,
  deleteTodoEntry,
  getTodoEntriesByTripId,
  updateTodoEntry,
} from '@la-sectoblique/septoblique-service';
import { TodoEntryOutput, TodoState } from '@la-sectoblique/septoblique-service/dist/types/models/Todo';

@Component({
  selector: 'spt-todolist',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.scss'],
})
export class ToDoListComponent implements OnInit {

  @Input() tripId: number;
  //constructor() { }
  taskName: string;
  taskList: TodoEntryOutput[];
  toDo = TodoState.TODO;
  doing = TodoState.DOING;
  done = TodoState.DONE;
  taskState: TodoState;
  create = false;
  update = false;
  indexList: any;

  ngOnInit() {
    getTodoEntriesByTripId(this.tripId)
      .then((res: TodoEntryOutput[]) => {
        this.taskList = res;
      });
  }

  onEnter(taskName: string): void {
    this.addTask(taskName);
  }

  changeState(state: TodoState, taskId: number): void {
    updateTodoEntry(taskId, { state })
      .then((res: TodoEntryOutput) => {
        this.taskState = res.state;
      });
  }

  changeName(taskId: number, title: string): void {
    updateTodoEntry(taskId, { title })
      .then(() => {
        this.indexList = null;
        this.taskName = ' ';
        getTodoEntriesByTripId(this.tripId)
          .then((res: TodoEntryOutput[]) => {
            this.taskList = res;
          });
      });
  }

  addTask(taskName: string): void {
    addTodoEntry({ state: TodoState.TODO, title: taskName, tripId: this.tripId })
      .then((res: TodoEntryOutput) => {
        this.taskList.push(res);
        this.taskState = res.state;
        this.taskName = ' ';
        this.create = false;
      });
  }

  deleteTask(taskId: number, idx: number): void {
    deleteTodoEntry(taskId)
      .then(()=> {
        this.taskList.splice(idx, 1);
      },
      );
  }

  createTask(): void {
    this.create = true;
  }

  updateName(idx: number): void {
    this.indexList = idx;
    this.update = true;
  }

}
