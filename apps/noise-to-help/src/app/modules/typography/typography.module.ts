import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncourageTextComponent } from './encourage-text.component';
import { ParagraphComponent } from './paragraph.component';
import { ImportantTextComponent } from './important-text.component';
import { InternalLinkTextComponent } from './internal-link-text.component';
import { RouterModule } from '@angular/router';
import { ExternalLinkTextComponent } from './external-link-text.component';
import { TitleTextComponent } from './title-text.component';
import { DownloadLinkTextComponent } from './download-link-text.component';
import { EmailLinkTextComponent } from './email-link-text.component';
import { SubTitleTextComponent } from './subtitle-text.component';
import { ParagraphGroupComponent } from './paragraph-group.component';
import { HorizontalDividerComponent } from './horizontal-divider.component';
import { MatListModule } from '@angular/material/list';
import { ListItemParagraphComponent } from './list-item-paragraph.component';
import { DividerParagraphComponent } from './divider-paragraph.component';

@NgModule({
  declarations: [
    EncourageTextComponent,
    ParagraphComponent,
    ImportantTextComponent,
    InternalLinkTextComponent,
    ExternalLinkTextComponent,
    TitleTextComponent,
    DownloadLinkTextComponent,
    EmailLinkTextComponent,
    ListItemParagraphComponent,
    DividerParagraphComponent,
    SubTitleTextComponent,
    ParagraphGroupComponent,
    HorizontalDividerComponent,
  ],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [
    EncourageTextComponent,
    ParagraphComponent,
    ImportantTextComponent,
    InternalLinkTextComponent,
    ExternalLinkTextComponent,
    TitleTextComponent,
    DownloadLinkTextComponent,
    EmailLinkTextComponent,
    ListItemParagraphComponent,
    DividerParagraphComponent,
    SubTitleTextComponent,
    ParagraphGroupComponent,
    HorizontalDividerComponent,
  ],
})
export class TypographyModule {}
