import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogutPage } from './logut.page';

const routes: Routes = [
  {
    path: '',
    component: LogutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogutPageRoutingModule {}
