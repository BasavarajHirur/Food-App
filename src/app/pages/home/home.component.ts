import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Store_Restaurant_data } from 'src/app/store/common.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isOpen = false;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(Store_Restaurant_data());
  }
}
