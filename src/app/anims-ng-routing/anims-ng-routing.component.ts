import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anims-ng-routing',
  templateUrl: './anims-ng-routing.component.html',
  styleUrls: ['./anims-ng-routing.component.scss'],
})
export class AnimsNgRoutingComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 6) {
      this.router.navigate(['/anims/ng-states']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/ng-routing-intro']);
    } else {
      this.state--;
    }
  }

  get routes() {
    return `...,
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
...`;
  }

  get template() {
    return `<p @fade>Test</p>`;
  }

  get anim() {
    return `<p [@fade]="fadeState"></p>`;
  }
}
