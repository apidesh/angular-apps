import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CmsComponent } from './cms/cms.component';
import { MemberComponent } from './member/member.component';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    MemberComponent,
    OpenaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
