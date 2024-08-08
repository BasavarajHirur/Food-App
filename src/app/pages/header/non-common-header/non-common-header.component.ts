import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-common-header',
  templateUrl: './non-common-header.component.html',
  styleUrls: ['./non-common-header.component.scss']
})
export class NonCommonHeaderComponent implements OnInit {
  public toggle: boolean = false;
  public headerName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.headerName = this.router.routerState.snapshot.url.replace('/', '').trim().toUpperCase();
  }

}
