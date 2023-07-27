import { Component } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class Dropdownlist {

  public categories = ["item 1", "item 2", "item 3", "item 4", "item 5"];
}
