import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { State } from '../../reducers/counter.reducer'
import { selectCount, selectCounterState } from '../../selectors/counter.selector';
import * as CounterActions from '../../actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$ = this.store.pipe(select(selectCount));
  constructor(private store: Store<State>) { }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement())
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

}
