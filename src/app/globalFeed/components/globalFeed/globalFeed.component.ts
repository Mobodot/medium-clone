import { Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerCompnent } from '../../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../../shared/components/popularTags/popularTags.component';
import { FeedTogglerComponent } from '../../../shared/components/feedToggler/feedToggler.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerCompnent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedComponent {
  apiUrl: string = '/articles';
}
