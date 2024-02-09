import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleRequestInterface } from '../../shared/types/articleRequest.interface';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from '../../shared/types/article.interface';
import { ArticleResponseInterface } from '../../shared/types/articleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleRequest: ArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = 'https://api.realworld.io/api/articles';
    // const fullUrl = 'http://localhost:3000/api/articles/';
    return this.http
      .post<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(map((response: ArticleResponseInterface) => response.article));
  }
}
