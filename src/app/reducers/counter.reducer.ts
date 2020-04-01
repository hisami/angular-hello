import { createReducer, on } from '@ngrx/store'
import * as CounterActions from '../actions/counter.action'

export const featureName = 'count'
export interface State {
    count: number;
}
export const initialState: State = {
    count: 0
}

const _counterReducer = createReducer(
    initialState,
    on(CounterActions.increment, state => ({ ...state, count: state.count + 1 })),
    on(CounterActions.decrement, state => ({ ...state, count: state.count - 1 })),
    on(CounterActions.reset, state => ({ ...state, count: 0 })),
)

export const counterReducer = (state: State, action) => {
    return _counterReducer(state, action);
}