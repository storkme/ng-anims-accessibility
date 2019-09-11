import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-a11y-robust',
  templateUrl: './a11y-robust.component.html',
  styleUrls: ['./a11y-robust.component.scss'],
  animations: [fadeHeight],
})
export class A11yRobustComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 8) {
      this.router.navigate(['/fin']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/a11y/understandable']);
    } else {
      this.state--;
    }
  }

  get exampleComponentId() {
    return `let id = 0;
@Component({ selector: 'my-component' })
export class MyComponent {
  public readonly componentId = 'my-component-' + (id++);
}`;
  }

  get exampleComponentIdTmpl() {
    return `<label [for]="componentId">My Component</label>
<input [id]="componentId">`;
  }
}
