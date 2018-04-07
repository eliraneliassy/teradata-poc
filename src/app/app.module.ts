import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { routing } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeradataComponent } from './teradata/teradata.component';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentSearchModule, CovalentMenuModule, CovalentExpansionPanelModule, CovalentMediaModule } from '@covalent/core';




@NgModule({
  declarations: [
    AppComponent,
    TeradataComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentNotificationsModule,
    CovalentSearchModule,
    CovalentMenuModule,
    CovalentExpansionPanelModule,
    CovalentMediaModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
