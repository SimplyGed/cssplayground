import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'css-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  public percentage: Number = 72;

  constructor() { }

  ngOnInit() {
  }

  public progress($event): void {
    this.percentage = $event;
  }
}
