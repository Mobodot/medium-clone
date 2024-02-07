import { PopularTagType } from '../../../types/popularTag.type';

export interface PopularTagsStateInterface {
  isLoading: boolean;
  data: PopularTagType[] | null;
  error: string | null;
}
