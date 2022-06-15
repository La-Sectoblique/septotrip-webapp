import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { uploadFile } from '@la-sectoblique/septoblique-service';
import { FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { FileSelectResult } from 'ngx-dropzone/lib/ngx-dropzone.service';

@Component({
  selector: 'spt-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss'],
})
export class AddFilesComponent {

  @Input() tripId: number;
  @Input() pathId?: number;
  @Input() stepId?: number;

  fileForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    visibility: new FormControl('private', [Validators.required]),
  });

  fileToSend: File | undefined = undefined;

  file?: File;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    if (!this.isValid() || !this.file) {
      return;
    }

    const extension = this.file.name.substring(this.file.name.lastIndexOf('.') + 1, this.file.name.length);

    uploadFile({
      name: this.fileForm.value.name,
      extension,
      fileType: this.getFileType(extension),
      mimeType: this.file.type,
      tripId: this.tripId,
      pathId: this.pathId,
      stepId: this.stepId,
      visibility: this.fileForm.value.visibility,
    }, this.file);
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
    return this.fileForm.valid && this.file !== undefined;
  }

  getFileType(extension: string): FileType {
    if (['png', 'jpeg', 'jpg'].includes(extension)) {
      return FileType.PHOTO;
    }
    return FileType.DOCUMENT;
  }

}
