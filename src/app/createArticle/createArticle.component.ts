import { Component } from '@angular/core';
import { ArticleFormValuesInterface } from '../shared/components/types/articleFormValues.interface';
import { ArticleFormComponent } from '../shared/components/createArticleForm/articleForm.component';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectIsSubmitting, selectValidationErrors } from './store/reducers';
import { ArticleRequestInterface } from '../shared/types/articleRequest.interface';
import { createArticleActions } from './store/actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule],
})
export class CreateArticleComponent {
  initialValues: ArticleFormValuesInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private store: Store) {}

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(createArticleActions.createArticle({ request }));
  }
}