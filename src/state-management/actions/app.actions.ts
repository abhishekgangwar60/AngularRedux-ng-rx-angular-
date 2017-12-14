import { Action } from '@ngrx/store/src/models';

export const INCREMENT_ACTION = 'Incrementing Counter';
export const DECREMENT_ACTION = 'Decrement Counter';

export class IncrementAction implements Action {
    readonly type = INCREMENT_ACTION;

    constructor(Counter: number) {

    }
}

export class DecrementAction implements Action {
    readonly type = DECREMENT_ACTION;

    constructor(Counter: number) {

    }
}

export type Custom_Action = IncrementAction | DecrementAction;