import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  bootstrapDiscord,
  bootstrapList,
  bootstrapTwitterX,
  bootstrapXLg,
} from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';

import { NgHttpLoaderComponent } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    NgHttpLoaderComponent,
    NgIconsModule.withIcons({
      bootstrapDiscord,
      bootstrapList,
      bootstrapTwitterX,
      bootstrapXLg,
    }),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
