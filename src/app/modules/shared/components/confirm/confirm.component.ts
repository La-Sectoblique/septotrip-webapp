import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'spt-confirm-component',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {

  @Input() confirmLabel: string;

  @Input() confirmBtnLabel = this.translate.instant('Confirm');
  @Input() cancelBtnLabel = this.translate.instant('Cancel');

  @Input() confirmAction: () => void;
  @Input() cancelAction: () => void;

  constructor(
    private dialogRef: NbDialogRef<ConfirmComponent>,
    private translate: TranslateService,
  ) {}


  confirm(): void {
    this.confirmAction();
    this.dialogRef.close();
  }

  cancel(): void {
    if (this.cancelAction) {
      this.cancelAction();
    }
    this.dialogRef.close();
  }


}
