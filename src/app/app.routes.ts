import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./globalFeed/globalFeed.routes').then((m) => m.globalFeedRoutes),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./yourFeed/yourFeed.routes').then((m) => m.yourFeedRoutes),
  },
  {
    path: 'tags/:slug',
    loadChildren: () =>
      import('./tagFeed/tagFeed.routes').then((m) => m.tagFeedRoutes),
  },
  {
    path: 'articles/new',
    loadChildren: () =>
      import('./createArticle/createArticle.routes').then(
        (m) => m.createArticleRoutes
      ),
  },
  {
    path: 'articles/:slug',
    loadChildren: () =>
      import('./article/article.routes').then((m) => m.articleRoutes),
  },
];
