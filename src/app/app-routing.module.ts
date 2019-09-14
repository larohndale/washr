import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './views/postList/global/global.component';
import { UserInfoComponent } from './views/user-info/user-info.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = redirectUnauthorizedTo(['']);
const redirectLoggedInToTimeline = redirectLoggedInTo(['timeline']);

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    ...canActivate(redirectLoggedInToTimeline)
  },
  {
    path: 'timeline',
    component: GlobalComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'userinfo/:id',
    component: UserInfoComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
