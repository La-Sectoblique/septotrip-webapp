import { Component, Input, OnInit } from '@angular/core';
import { addTodoEntry, getTodoEntriesByTripId } from '@la-sectoblique/septoblique-service';
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

  ngOnInit() {
    getTodoEntriesByTripId(this.tripId)
      .then((res: TodoEntryOutput[]) => {
        this.taskList = res;
      });
  }

  addTask(taskName: string): void {
    addTodoEntry({ state: TodoState.TODO, title: taskName, tripId: this.tripId })
      .then((res: TodoEntryOutput) => {
        this.taskList.push(res);
        console.log('ici');
      });
  }

}
