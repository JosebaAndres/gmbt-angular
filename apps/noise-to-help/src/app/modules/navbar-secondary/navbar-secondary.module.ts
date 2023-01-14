import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CenteredLayoutModule } from '../centered-layout/centered-layout.module';
import { NavbarSecondaryComponent } from './navbar-secondary.component';

@NgModule({
  declarations: [NavbarSecondaryComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    CustomIconsModule,
    RouterModule,
    MatButtonModule,
    CenteredLayoutModule,
  ],
  exports: [NavbarSecondaryComponent],
})
export class NavbarSecondaryModule {}
