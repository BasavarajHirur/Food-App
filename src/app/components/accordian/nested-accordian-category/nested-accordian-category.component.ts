import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested-accordian-category',
  templateUrl: './nested-accordian-category.component.html',
  styleUrls: ['./nested-accordian-category.component.scss']
})
export class NestedAccordianCategoryComponent {
  @Input('nestedCategory') nestedCategory: any;

  public selectedList: any;

  toggleAccordian(index: any) {
    this.selectedList = this.selectedList === index ? null : index;
  }
}
