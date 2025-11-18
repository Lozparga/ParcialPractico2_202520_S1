import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list/actor-list.component';

@NgModule({
  declarations: [ActorListComponent],
  imports: [CommonModule],
  exports: [ActorListComponent],
})
export class ActorModule {}
