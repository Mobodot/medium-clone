import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = 'https://api.realworld.io/api/articles/' + slug;
    // const fullUrl = 'http://localhost:3000/api/articles/' + slug;
    return this.http.delete(fullUrl);
  }
}
