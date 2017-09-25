import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'css-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public showMenu(): void {
    this.show = !this.show;
  }
}
