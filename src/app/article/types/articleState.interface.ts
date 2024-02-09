import { ArticleInterface } from '../../shared/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: null | string;
  data: ArticleInterface | null;
}
