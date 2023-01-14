import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CenteredLayoutModule } from '../centered-layout/centered-layout.module';
import { NavbarPrimaryComponent } from './navbar-primary.component';

@NgModule({
  declarations: [NavbarPrimaryComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    CustomIconsModule,
    RouterModule,
    MatButtonModule,
    CenteredLayoutModule,
  ],
  exports: [NavbarPrimaryComponent],
})
export class NavbarPrimaryModule {}
