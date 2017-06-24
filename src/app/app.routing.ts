import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../kcbb/content/dashboard/dashboard.component';
import { ArticleComponent } from '../kcbb/content/article/article.component';
import { NestedArticleComponent } from '../kcbb/content/nested-article/nested-article.component';
import { PageNotFoundComponent } from '../kcbb/blocks/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/apostolska-cirkev',
        pathMatch: 'full'
    },
    {
        path: 'apostolska-cirkev',
        component: DashboardComponent
    },
    {
        path: 'apostolska-cirkev-bb/:article-id',
        component: ArticleComponent
    },
    {
        path: 'apostolska-cirkev-banska-bystrica/:article-id',
        component: NestedArticleComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }

export const routedComponents = [
    DashboardComponent,
    ArticleComponent,
    NestedArticleComponent,
    PageNotFoundComponent
];
