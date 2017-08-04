import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../kcbb/content/dashboard/dashboard.component';
import { ArticleComponent } from '../kcbb/content/article/article.component';
import { Page404Component } from '../kcbb/content/page-404/page-404.component';

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
        component: Page404Component
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
    Page404Component
];
