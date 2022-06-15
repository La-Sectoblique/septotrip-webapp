import { Component, Input } from '@angular/core';
import { getFileLink } from '@la-sectoblique/septoblique-service';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { NbDialogService } from '@nebular/theme';
import { environment } from 'src/environments/environment';
import { AddFilesComponent } from '../add-files/add-files.component';

@Component({
  selector: 'spt-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
})
export class FilesListComponent {

  @Input() tripId: number;
  @Input() files: FileMetadataOutput[];

  apiUrl = environment.baseURL;

  constructor(
    private nbDialogService: NbDialogService,
  ) { }

  openAddFileModal(): void {
    this.nbDialogService.open(AddFilesComponent, { context: {
      tripId: this.tripId,
    } });
  }

}
