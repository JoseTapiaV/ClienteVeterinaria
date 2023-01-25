import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogutPageRoutingModule } from './logut-routing.module';

import { LogutPage } from './logut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogutPageRoutingModule
  ],
  declarations: [LogutPage]
})
export class LogutPageModule {}
