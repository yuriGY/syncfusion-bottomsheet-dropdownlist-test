import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AppComponent } from './app.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { Dropdownlist } from './drop-down-list/drop-down-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Dropdownlist,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropDownListModule,
    AppRoutingModule,
    MatIconModule,
    MatBottomSheetModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
