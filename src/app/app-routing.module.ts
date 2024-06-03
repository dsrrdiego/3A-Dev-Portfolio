import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './layout/hero/hero.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: HeroComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
