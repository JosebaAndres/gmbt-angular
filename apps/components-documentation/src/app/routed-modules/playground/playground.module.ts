import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundStoreModule } from '../../stores/playground/playground-store.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, PlaygroundRoutingModule, PlaygroundStoreModule, FormsModule],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {}
