import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { popularTagsActions } from './store/actions';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectPopularTagsData,
} from './store/reducers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, ErrorMessageComponent, LoadingComponent],
})
export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    popularTags: this.store.select(selectPopularTagsData),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
