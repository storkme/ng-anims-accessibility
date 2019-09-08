import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anims-ng-routing-intro',
  templateUrl: './anims-ng-routing-intro.component.html',
  styleUrls: ['./anims-ng-routing-intro.component.scss'],
})
export class AnimsNgRoutingIntroComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    this.router.navigate(['/anims/ng-routing']);
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    this.router.navigate(['/anims/ng-states']);
  }

  get getHtml() {
    return `<p @fade>Test</p>`;
  }

  get getTrigger() {
    return `@Component({
  ...
  animations: [
    trigger('fade', [
      state(...),
      transition(...),
    ]);
  ]
})`;
  }

  get getTriggerExpr() {
    return `<p [@fade]="fadeState"></p>`;
  }
}
