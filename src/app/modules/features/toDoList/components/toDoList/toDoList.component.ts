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
  TodoState = TodoState;
  taskState: TodoState;
  create = false;
  update = false;
  indexList: number | null;

  ngOnInit() {
    getTodoEntriesByTripId(this.tripId)
      .then((res: TodoEntryOutput[]) => {
        this.taskList = res;
        this.taskList.sort((task1, task2) => {
          if (task1.state === task2.state) {
            return task1.id - task2.id;
          } else {
            return task1.state - task2.state;
          }
        });
      });
  }

  onEnter(taskName: string): void {
    this.addTask(taskName);
  }

  changeState(state: TodoState, taskId: number): void {
    updateTodoEntry(taskId, { state })
      .then((res: TodoEntryOutput) => {
        this.taskState = res.state;
        this.taskList.sort((task1, task2) => {
          if (task1.state === task2.state) {
            return task1.id - task2.id;
          } else {
            return task1.state - task2.state;
          }
        });
      });
  }

  changeName(taskId: number, title: string): void {
    updateTodoEntry(taskId, { title })
      .then(() => {
        this.indexList = null;
        this.taskName = ' ';
        this.update = false;
        getTodoEntriesByTripId(this.tripId)
          .then((res: TodoEntryOutput[]) => {
            this.taskList = res;
            this.taskList.sort((task1, task2) => {
              if (task1.state === task2.state) {
                return task1.id - task2.id;
              } else {
                return task1.state - task2.state;
              }
            });
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
        this.taskList.sort((task1, task2) => {
          if (task1.state === task2.state) {
            return task1.id - task2.id;
          } else {
            return task1.state - task2.state;
          }
        });
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
