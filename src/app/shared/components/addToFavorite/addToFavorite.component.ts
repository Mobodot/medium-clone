import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddToFavoriteService } from './services/addToFavorite.service';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from './store/actions';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './addToFavorite.component.html',
  standalone: true,
  imports: [CommonModule],
  // providers: [AddToFavoriteService],
})
export class AddToFavoriteComponent {
  @Input() isFavorited: boolean = false;
  @Input() favoritesCount: number = 0;
  @Input() articleSlug: string = '';

  constructor(private store: Store) {}

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction.addToFavorites({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
