import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Handle_Login } from 'src/app/store';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public login = true;

  constructor(private store: Store) { }

  close() {
    this.store.dispatch(Handle_Login({ isOpen: false }));
  }
}
