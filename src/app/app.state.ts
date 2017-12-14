import { ActionReducer, ActionReducerMap } from '@ngrx/store/src/models';
import { reducer } from './../state-management/reducers/app.reducers';
import { state } from '../state-management/states/app.state';


export const reducers: ActionReducerMap<any> = {
    Custom_reducer: reducer
}

export interface AppState {
    Custom_reducer: state
}