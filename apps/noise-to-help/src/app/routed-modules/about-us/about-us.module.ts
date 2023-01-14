import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { TypographyModule } from '../../modules/typography/typography.module';
import { ImgModule } from '../../modules/img/img.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, ViewModule, TypographyModule, ImgModule],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}
