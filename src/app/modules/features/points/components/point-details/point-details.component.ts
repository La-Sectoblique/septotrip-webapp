import { Component, Input, OnInit } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTripPointFiles } from 'src/app/store/files-store/state/files.selectors';

@Component({
  selector: 'spt-point-details',
  templateUrl: './point-details.component.html',
  styleUrls: ['./point-details.component.scss'],
})
export class PointDetailsComponent implements OnInit {

  @Input() point: PointOutput;

  pointFiles$: Observable<FileMetadataOutput[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.pointFiles$ = this.store.select(selectTripPointFiles(this.point.tripId, this.point.id));
  }

}
