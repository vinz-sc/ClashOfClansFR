import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { ArticleTypeDictionaryPipe } from '../../shared/pipes/article-type-dictionary.pipe';
import { MomentDatePipe } from '../../shared/pipes/moment-date.pipe';

import { ArticleCardComponent } from './components/article-card/article-card.component';
import { CreatorCardComponent } from './components/creator-card/creator-card.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';

export const ROUTES: Route[] = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    ArticleCardComponent,
    CreatorCardComponent,
    DeveloperCardComponent,
    HomePageComponent,
  ],
  imports: [
    ArticleTypeDictionaryPipe,
    CommonModule,
    MomentDatePipe,
    NgIconsModule.withIcons({
      bootstrapArrowRight,
    }),
    RouterModule.forChild(ROUTES),
  ],
})
export class HomeModule {}
