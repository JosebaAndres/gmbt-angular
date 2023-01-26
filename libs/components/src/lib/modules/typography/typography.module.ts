import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { GmbtEncourageTextComponent } from './encourage-text.component';
import { GmbtParagraphComponent } from './paragraph.component';
import { GmbtImportantTextComponent } from './important-text.component';
import { GmbtInternalLinkTextComponent } from './internal-link-text.component';
import { GmbtExternalLinkTextComponent } from './external-link-text.component';
import { GmbtTitleTextComponent } from './title-text.component';
import { GmbtDownloadLinkTextComponent } from './download-link-text.component';
import { GmbtEmailLinkTextComponent } from './email-link-text.component';
import { GmbtSubTitleTextComponent } from './subtitle-text.component';
import { GmbtParagraphGroupComponent } from './paragraph-group.component';
import { GmbtHorizontalDividerComponent } from './horizontal-divider.component';
import { GmbtListItemParagraphComponent } from './list-item-paragraph.component';
import { GmbtDividerParagraphComponent } from './divider-paragraph.component';

@NgModule({
  declarations: [
    GmbtEncourageTextComponent,
    GmbtParagraphComponent,
    GmbtImportantTextComponent,
    GmbtInternalLinkTextComponent,
    GmbtExternalLinkTextComponent,
    GmbtTitleTextComponent,
    GmbtDownloadLinkTextComponent,
    GmbtEmailLinkTextComponent,
    GmbtListItemParagraphComponent,
    GmbtDividerParagraphComponent,
    GmbtSubTitleTextComponent,
    GmbtParagraphGroupComponent,
    GmbtHorizontalDividerComponent,
  ],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [
    GmbtEncourageTextComponent,
    GmbtParagraphComponent,
    GmbtImportantTextComponent,
    GmbtInternalLinkTextComponent,
    GmbtExternalLinkTextComponent,
    GmbtTitleTextComponent,
    GmbtDownloadLinkTextComponent,
    GmbtEmailLinkTextComponent,
    GmbtListItemParagraphComponent,
    GmbtDividerParagraphComponent,
    GmbtSubTitleTextComponent,
    GmbtParagraphGroupComponent,
    GmbtHorizontalDividerComponent,
  ],
})
export class GmbtTypographyModule {}
