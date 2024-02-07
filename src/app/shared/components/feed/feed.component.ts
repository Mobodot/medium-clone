import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectFeedData,
  selectIsLoading,
} from '../../store/reducers';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import queryString from 'query-string';
import { TagListComponent } from '../tagList/tagList.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagListComponent,
  ],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('apiUrl') apiUrlProps!: string;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    feed: this.store.select(selectFeedData),
    error: this.store.select(selectError),
  });
  limit = 7;
  baseUrl = this.router.url.split('?')[0];
  currentPage = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      // console.log('params', params);
      this.currentPage = Number(params['page'] || '1');
      this.fetchFeed();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue;

    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      // ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(feedActions.getFeed({ url: apiUrlWithParams }));
  }
}
