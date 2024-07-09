import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-accordian',
  templateUrl: './category-accordian.component.html',
  styleUrls: ['./category-accordian.component.scss']
})
export class CategoryAccordianComponent implements OnInit {
  @Input('accordianCategory') accordianCategory: any;
  @Input('show') show: any;
  @Input('index') index: any;

  @Output('showAccordian') showAccordian = new EventEmitter();

  ngOnInit(): void {

  }

  setShow() {
    this.showAccordian.emit(this.index);
  }
}
