// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsComponent } from './cms/cms.component';
import { MemberComponent } from './member/member.component';
import { OpenaccountComponent } from './openaccount/openaccount.component';


// Route Configuration
export const routes: Routes = [
  { path: 'cms', component: CmsComponent },
  { path: 'member', component: MemberComponent },
  { path: 'openaccount', component: OpenaccountComponent }
];


// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);