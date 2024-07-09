import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WHAT_IS_IN_YOUR_MIND } from 'src/app/contants/api-url';
import { selectMenuCardData } from 'src/app/store/common.selector';

@Component({
  selector: 'app-what-is-on-your-mind-carousal',
  templateUrl: './what-is-on-your-mind-carousal.component.html',
  styleUrls: ['./what-is-on-your-mind-carousal.component.scss']
})
export class WhatIsOnYourMindCarousalComponent {

  public menuCards: any;
  public WHAT_IS_IN_YOUR_MIND = WHAT_IS_IN_YOUR_MIND;

  constructor(private store: Store) {
    this.store.select(selectMenuCardData).subscribe(
      res => {
        this.menuCards = res;
      }
    )
  }

}
