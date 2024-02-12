import { Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerCompnent } from '../../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../../shared/components/popularTags/popularTags.component';
import { FeedTogglerComponent } from '../../../shared/components/feedToggler/feedToggler.component';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-Feed',
  templateUrl: './yourFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerCompnent,
    PopularTagsComponent,
    FeedTogglerComponent,
    CommonModule,
  ],
})
export class YourFeedComponent {
  apiUrl: string = '/articles/feed';

  constructor(private store: Store) {}

  isCurrentUser$ = this.store
    .select(selectCurrentUser)
    .pipe(filter(() => Boolean(selectCurrentUser)));
}
