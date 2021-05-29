import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayaUltimoPage } from './raya-ultimo.page';

const routes: Routes = [
  {
    path: '',
    component: RayaUltimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayaUltimoPageRoutingModule {}
