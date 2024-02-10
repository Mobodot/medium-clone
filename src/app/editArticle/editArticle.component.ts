import { Component, OnInit } from '@angular/core';
import { ArticleFormValuesInterface } from '../shared/components/articleForm/types/articleFormValues.interface';
import { ArticleFormComponent } from '../shared/components/articleForm/articleForm.component';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map } from 'rxjs';
import {
  selectArticle,
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors,
} from './store/reducers';
import { ArticleRequestInterface } from '../shared/types/articleRequest.interface';
import { editArticleActions } from './store/actions';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from '../shared/types/article.interface';
import { BackendErrorMessages } from '../shared/components/backendErrorMessages/backendErrorMessages.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
  standalone: true,
  imports: [
    ArticleFormComponent,
    CommonModule,
    BackendErrorMessages,
    LoadingComponent,
  ],
})
export class EditArticleComponent implements OnInit {
  // initialValues = {
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: [],
  // };

  initialValues$: Observable<ArticleFormValuesInterface> = this.store.pipe(
    select(selectArticle),
    filter((article): article is ArticleInterface => article !== null),
    map((article: ArticleInterface) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      };
    })
  );

  slug = this.route.snapshot.paramMap.get('slug') ?? '';

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
    initialValues: this.initialValues$,
    isLoading: this.store.select(selectIsLoading),
  });

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(editArticleActions.getArticle({ slug: this.slug }));
  }

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    console.log('on submit create article', articleFormValues);
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(
      editArticleActions.updateArticle({ request, slug: this.slug })
    );
  }
}
