import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent   {
  private _counterSource$ = new Subject<any>();
  private _subscription = Subscription.EMPTY;

  @Input() counter!: number;
  @Input() interval!: number;
  @Output() value = new EventEmitter<number>();

  constructor() {

    this._subscription = this._counterSource$.pipe(
      switchMap(({ interval, count }) =>
        timer(0, interval).pipe(
          take(count),
          tap(() => this.value.emit(--count))
        )
      )
    ).subscribe();
  }

  ngOnChanges() {
    this._counterSource$.next({ count: this.counter, interval: this.interval });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
function switchMap(arg0: ({ interval, count }: { interval: any; count: any; }) => import("rxjs").Observable<unknown>): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

function take(count: any): import("rxjs").OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}

function tap(arg0: () => void): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

