import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['login-page']);
const redirectLoggedInToMenu = () => redirectLoggedInTo(['tabs/menu']);

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  {
    path: 'login-page',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToMenu },
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPagePageModule
      ),
  },
  {
    path: 'register',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToMenu },
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home-page',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePagePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
