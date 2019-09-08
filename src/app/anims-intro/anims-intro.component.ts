import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anims-intro',
  templateUrl: './anims-intro.component.html',
  styleUrls: ['./anims-intro.component.scss'],
})
export class AnimsIntroComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    this.router.navigate(['/anims/why']);
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    this.router.navigate(['/']);
  }
}
