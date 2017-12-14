import * as Custom from './../actions/app.actions';
import { state, initialState } from './../states/app.state';
import { ActionReducer, Action } from "@ngrx/store";


export const reducer: ActionReducer<state> = (state = initialState, action: Custom.Custom_Action): state => {

    console.log("Action Called :-", action.type);

    switch (action.type) {

        case Custom.INCREMENT_ACTION: {
            return {
                counter: state.counter + 1,
            }
        }

        case Custom.DECREMENT_ACTION: {
            return {
                counter: state.counter - 1,
            }
        }

        default: {
            return state;
        }
    }
}
