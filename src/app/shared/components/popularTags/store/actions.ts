import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';
import { PopularTagType } from '../../../types/popularTag.type';

export const popularTagsActions = createActionGroup({
  source: 'popular Tags',
  events: {
    'Get Popular Tags': emptyProps(),
    'Get Popular Tags Success': props<{ popularTags: PopularTagType[] }>(),
    'Get Popular Tags Failure': emptyProps(),
  },
});
