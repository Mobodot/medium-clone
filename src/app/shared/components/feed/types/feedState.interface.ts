import { GetFeedResponseInterface } from './getFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  data: GetFeedResponseInterface | null;
  error: null | string;
}
