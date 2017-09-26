import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'css-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public show: boolean;
  private isRoot: BehaviorSubject<boolean>;

  constructor(private router: Router, private location: Location) {
    this.isRoot = new BehaviorSubject<boolean>(true);
    this.isRoot.subscribe(val => this.show = val);
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.isRoot.next(this.location.path() !== '/layout');
    });
  }
}
