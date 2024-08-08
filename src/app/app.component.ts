import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Handle_Login, selectLogInFormStatus } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'food-app';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.openLogInForm();
  }

  openLogInForm() {
    this.store.select(selectLogInFormStatus).subscribe(
      res => {
        this.handleForm(res);
      }
    )
  }

  async handleForm(condition: boolean) {
    const modal: HTMLElement = document.querySelector('#modal')!;
    modal.style.display = 'block';
    const form: HTMLElement = document.querySelector('#login-form')!;
    if (condition) {
      form.style.width = '450px';
      document.body.style.overflow = 'hidden';
    } else {
      form.style.width = '0px';
      modal.style.display = 'none'
      document.body.style.overflow = 'auto';
    }
    form.style.transition = 'All 0.2s linear';
  }

  closeLogIn() {
    this.store.dispatch(Handle_Login({ isOpen: false }));
  }
}
