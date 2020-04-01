import { createFeatureSelector, createSelector } from '@ngrx/store'
import { State, featureName } from '../reducers/counter.reducer'

export const selectCounterState = createFeatureSelector<State>(featureName)
export const selectCount = createSelector(selectCounterState, state => state.count)