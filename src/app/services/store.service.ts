import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class StoreService {
  private _a: number = -5;
  private _b: number = 10;

  change() {
    this.increase();
    this.decrease();
    this.decrease();
  }

  increase() {
    this._a++;
  }

  decrease() {
    this._b--;
  }

  get a() {
    return this._a;
  }

  get b() {
    return this._b;
  }
}
