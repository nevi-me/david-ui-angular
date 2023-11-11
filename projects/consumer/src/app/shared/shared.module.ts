import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule,HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { CodePreviewerComponent } from './components/code-previewer/code-previewer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DUIAccordion, DUIAlert, DUIAvatar, DUIButton, DUICheckbox, DUIDialog, DUIIcon, DUIInput, DUIRadio, DUISelect, DUITextarea, DUITypography, } from 'projects/david-ui-angular/src/public-api';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../docs/footer/footer.component';
import { FeaturePreviewComponent } from './components/feature-preview/feature-preview.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    CodePreviewerComponent,
    FooterComponent,
    FeaturePreviewComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    ClipboardModule,
    FormsModule,
    ClipboardModule,

    DUIAccordion,
    DUIButton,
    DUIAlert,
    DUIAvatar,
    DUITypography,
    DUICheckbox,
    DUIRadio,
    FormsModule,
    DUIDialog,
    DUITextarea,
    DUIInput,
    DUISelect,
    DUIIcon
  ],
  exports:[
    CodePreviewerComponent,
    CommonModule,
    HighlightModule,
    ClipboardModule,
    FormsModule,
    ClipboardModule,
    FooterComponent,
    NavbarComponent,

    DUIAccordion,
    DUIButton,
    DUIAlert,
    DUIAvatar,
    DUITypography,
    DUICheckbox,
    DUIRadio,
    FormsModule,
    DUIDialog,
    DUITextarea,
    DUIInput,
    DUISelect,
    DUIIcon,
    FeaturePreviewComponent,
  ],

})
export class SharedModule { }
