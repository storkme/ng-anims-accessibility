import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import { IntroComponent } from './intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimsIntroComponent } from './anims-intro/anims-intro.component';
import { AnimsWhyComponent } from './anims-why/anims-why.component';
import { AnimsWhySeriouslyComponent } from './anims-why-seriously/anims-why-seriously.component';
import { AnimsCautionComponent } from './anims-caution/anims-caution.component';
import { AnimsCssTransitionsComponent } from './anims-css-transitions/anims-css-transitions.component';
import { AnimsNgTriggersComponent } from './anims-ng-triggers/anims-ng-triggers.component';
import { AnimsNgStatesComponent } from './anims-ng-states/anims-ng-states.component';
import { AnimsNgRoutingIntroComponent } from './anims-ng-routing-intro/anims-ng-routing-intro.component';
import { AnimsNgRoutingComponent } from './anims-ng-routing/anims-ng-routing.component';
import { AnimsNgRoutingIiComponent } from './anims-ng-routing-ii/anims-ng-routing-ii.component';
import { A11yIntroComponent } from './a11y-intro/a11y-intro.component';
import { A11yWhyComponent } from './a11y-why/a11y-why.component';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml },
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AnimsIntroComponent,
    AnimsWhyComponent,
    AnimsWhySeriouslyComponent,
    AnimsCautionComponent,
    AnimsCssTransitionsComponent,
    AnimsNgTriggersComponent,
    AnimsNgStatesComponent,
    AnimsNgRoutingIntroComponent,
    AnimsNgRoutingComponent,
    AnimsNgRoutingIiComponent,
    A11yIntroComponent,
    A11yWhyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hljsLanguages,
    }),
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
