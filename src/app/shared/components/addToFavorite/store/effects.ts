import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddToFavoriteService } from '../services/addToFavorite.service';
import { addToFavoritesAction } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleInterface } from '../../../types/article.interface';

export const addToFavoriteEffects = createEffect(
  (
    actions$ = inject(Actions),
    addToFavoriteService = inject(AddToFavoriteService)
  ) => {
    return actions$.pipe(
      ofType(addToFavoritesAction.addToFavorites),
      switchMap(({ isFavorited, slug }) => {
        const articles$ = isFavorited
          ? addToFavoriteService.removeFromFavorite(slug)
          : addToFavoriteService.addToFavorite(slug);
        return articles$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesAction.addToFavoritesSuccess({ article });
          }),
          catchError(() => {
            return of(addToFavoritesAction.addToFavoritesFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
