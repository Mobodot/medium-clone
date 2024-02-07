import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topbar.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class TopbarComponent {
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });
  constructor(private store: Store) {}
}
