import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = '#faa';
  }
}
