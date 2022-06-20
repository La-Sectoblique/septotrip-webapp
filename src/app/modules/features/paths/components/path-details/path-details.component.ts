import { Component, Input, OnInit } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTripPathFiles } from 'src/app/store/files-store/state/files.selectors';

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.scss'],
})
export class PathDetailsComponent implements OnInit {

  @Input() tripId: number;
  @Input() path: PathOutput;

  pathFiles$: Observable<FileMetadataOutput[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.pathFiles$ = this.store.select(selectTripPathFiles(this.tripId, this.path.id));
  }

}
