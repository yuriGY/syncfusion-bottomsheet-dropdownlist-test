import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { Dropdownlist } from './drop-down-list/drop-down-list.component';

@Component({
  selector: 'app-root',
  template: '',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  bottomSheetRef = {} as MatBottomSheetRef<BottomSheetComponent>

  constructor(
    public bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
    this.openBottomSheet();
  }

  openBottomSheet(): void {
    setTimeout(() => {
      this.bottomSheetRef = this.bottomSheet.open(Dropdownlist as any);

      this.bottomSheetRef.afterOpened().subscribe(() => {
        console.log('Bottom sheet is open.');
      });
      this.bottomSheetRef.afterDismissed().subscribe(data => {
        console.log('Return value: ', data);
      });
    }, 0);
  }
}
