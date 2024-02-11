import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from '../../../types/article.interface';
import { ArticleResponseInterface } from '../../../types/articleResponse.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddToFavoriteService {
  constructor(private http: HttpClient) {}

  addToFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .post<ArticleResponseInterface>(url, {})
      .pipe(map((response) => response.article));
  }

  removeFromFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .delete<ArticleResponseInterface>(url)
      .pipe(map((response) => response.article));
  }

  getUrl(slug: string): string {
    return `https://api.realworld.io/api/articles/${slug}/favorite`;

    // return "http://localhost:3000/api/articles/" + slug + "/favorite"
  }
}
