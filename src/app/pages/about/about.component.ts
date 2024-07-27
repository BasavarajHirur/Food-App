import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Store_User_data } from 'src/app/store/common.actions';
import { selectUserData } from 'src/app/store/common.selector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public userData: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(Store_User_data());
    this.getUserData();
  }

  getUserData() {
    this.store.select(selectUserData).subscribe(
      res => {
        this.userData = res;
      }
    )
  }
}
