import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
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
import { A11yPerceivableComponent } from './a11y-perceivable/a11y-perceivable.component';
import { A11yOperableComponent } from './a11y-operable/a11y-operable.component';
import { A11yUnderstandableComponent } from './a11y-understandable/a11y-understandable.component';
import { A11yRobustComponent } from './a11y-robust/a11y-robust.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: { page: 0 },
  },
  {
    path: 'anims',
    component: AnimsIntroComponent,
    data: { page: 1 },
  },
  {
    path: 'anims/why',
    component: AnimsWhyComponent,
    data: { page: 2 },
  },
  {
    path: 'anims/srsly',
    component: AnimsWhySeriouslyComponent,
    data: { page: 3 },
  },
  {
    path: 'anims/caution',
    component: AnimsCautionComponent,
    data: { page: 4 },
  },
  {
    path: 'anims/css-transitions',
    component: AnimsCssTransitionsComponent,
    data: { page: 5 },
  },
  {
    path: 'anims/ng-triggers',
    component: AnimsNgTriggersComponent,
    data: { page: 6 },
  },
  {
    path: 'anims/ng-states',
    component: AnimsNgStatesComponent,
    data: { page: 7 },
  },
  {
    path: 'anims/ng-routing-intro',
    component: AnimsNgRoutingIntroComponent,
    data: { page: 8 },
  },
  {
    path: 'anims/ng-routing',
    component: AnimsNgRoutingComponent,
    data: { page: 9 },
  },
  {
    path: 'anims/ng-routing-ii',
    component: AnimsNgRoutingIiComponent,
    data: { page: 10 },
  },
  {
    path: 'a11y',
    component: A11yIntroComponent,
    data: { page: 11 },
  },
  {
    path: 'a11y/why',
    component: A11yWhyComponent,
    data: { page: 12 },
  },
  {
    path: 'a11y/perceivable',
    component: A11yPerceivableComponent,
    data: { page: 13 },
  },
  {
    path: 'a11y/operable',
    component: A11yOperableComponent,
    data: { page: 14 },
  },
  {
    path: 'a11y/understandable',
    component: A11yUnderstandableComponent,
    data: { page: 15 },
  },
  {
    path: 'a11y/robust',
    component: A11yRobustComponent,
    data: { page: 16 },
  },
  {
    path: 'fin',
    component: EndComponent,
    data: { page: 17 },
  },
  {
    path: '**',
    redirectTo: '/intro',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
