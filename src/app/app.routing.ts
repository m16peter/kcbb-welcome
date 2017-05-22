import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../kcbb/content/dashboard/dashboard.component';
import { ArticleComponent } from '../kcbb/content/article/article.component';
import { PageNotFoundComponent } from '../kcbb/blocks/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'article/:article-id',
        component: ArticleComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routedComponents = [
    DashboardComponent,
    ArticleComponent,
    PageNotFoundComponent
];
