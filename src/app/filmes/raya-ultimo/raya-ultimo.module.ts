import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayaUltimoPageRoutingModule } from './raya-ultimo-routing.module';

import { RayaUltimoPage } from './raya-ultimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayaUltimoPageRoutingModule
  ],
  declarations: [RayaUltimoPage]
})
export class RayaUltimoPageModule {}
