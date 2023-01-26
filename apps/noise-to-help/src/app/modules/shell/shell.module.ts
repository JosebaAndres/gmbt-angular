import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';
import { CenteredLayoutModule } from '../centered-layout/centered-layout.module';
import { NavbarPrimaryModule } from '../navbar-primary/navbar-primary.module';
import { NavbarSecondaryModule } from '../navbar-secondary/navbar-secondary.module';
import { GmbtSignatureModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    NavbarPrimaryModule,
    NavbarSecondaryModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    GmbtSignatureModule,
    MatIconModule,
    CustomIconsModule,
    CenteredLayoutModule,
  ],
  exports: [ShellComponent],
})
export class ShellModule {}
