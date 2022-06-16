import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { FileSelectResult } from 'ngx-dropzone/lib/ngx-dropzone.service';
import { UpdateTripFile, UploadTripFile } from 'src/app/store/files-store/state/files.actions';

@Component({
  selector: 'spt-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFilesComponent implements OnInit {

  @Input() tripId: number;
  @Input() pathId?: number;
  @Input() stepId?: number;

  @Input() isEditMode = false;
  @Input() fileMetadataToEdit: FileMetadataOutput;

  fileForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    visibility: new FormControl('private', [Validators.required]),
  });

  fileToSend: File | undefined = undefined;

  file?: File;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: NbDialogRef<AddFilesComponent>,
    private store: Store,
  ) {}

  ngOnInit(): void {
    if (this.isEditMode && this.fileMetadataToEdit) {
      this.fileForm.patchValue({
        name: this.fileMetadataToEdit.name,
        visibility: this.fileMetadataToEdit.visibility,
      });
    }
  }

  onSubmit(): void {
    if (!this.isValid() && (this.file || this.isEditMode)) {
      return;
    }

    if (!this.isEditMode && this.file) {
      const extension = this.file.name.substring(this.file.name.lastIndexOf('.') + 1, this.file.name.length);

      this.store.dispatch(UploadTripFile({
        options: {
          name: this.fileForm.value.name,
          extension,
          fileType: this.getFileType(extension),
          mimeType: this.file.type,
          tripId: this.tripId,
          pathId: this.pathId,
          stepId: this.stepId,
          visibility: this.fileForm.value.visibility,
        },
        file: this.file,
      }));
    } else {
      this.store.dispatch(UpdateTripFile({
        fileId: this.fileMetadataToEdit.id,
        metadata: {
          ...this.fileMetadataToEdit,
          name: this.fileForm.value.name,
          visibility: this.fileForm.value.visibility,
        },
      }));
    }

    this.dialogRef.close();
  }

  onFileDrop(event: FileSelectResult): void {
    this.file = event.addedFiles[0];

    const fileName = event.addedFiles[0].name;
    this.fileForm.patchValue({
      name: fileName.substring(0, fileName.lastIndexOf('.')),
    });
  }

  onFileRemove(): void {
    delete this.file;
    this.fileForm.patchValue({
      name: '',
    });
  }

  isValid(): boolean {
    if (this.isEditMode) {
      return this.fileForm.valid
      && this.fileMetadataToEdit !== undefined
      && (this.fileForm.value.name !== this.fileMetadataToEdit.name
      || this.fileForm.value.visibility !== this.fileMetadataToEdit.visibility);
    }
    return this.fileForm.valid && this.file !== undefined;
  }

  getFileType(extension: string): FileType {
    if (['png', 'jpeg', 'jpg'].includes(extension)) {
      return FileType.PHOTO;
    }
    return FileType.DOCUMENT;
  }

}
