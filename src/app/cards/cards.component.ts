import {Component, OnDestroy} from '@angular/core';
import {StoreService} from "../services/store.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnDestroy {
  sub!: Subscription;

  constructor(public store: StoreService) { }

  start() {
    this.sub = interval(1000).subscribe(() => this.store.change());
  }

  stop() {
    this.sub.unsubscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
