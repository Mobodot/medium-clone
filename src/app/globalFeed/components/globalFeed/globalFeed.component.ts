import { Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerCompnent } from '../../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../../shared/components/popularTags/popularTags.component';
import { FeedTogglerComponent } from '../../../shared/components/feedToggler/feedToggler.component';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerCompnent,
    PopularTagsComponent,
    FeedTogglerComponent,
    CommonModule,
  ],
})
export class GlobalFeedComponent {
  apiUrl: string = '/articles';

  constructor(private store: Store) {}

  isCurrentUser$ = this.store
    .select(selectCurrentUser)
    .pipe(filter(() => Boolean(selectCurrentUser)));
}
