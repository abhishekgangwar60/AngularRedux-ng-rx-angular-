import { INCREMENT_ACTION, DECREMENT_ACTION } from './../state-management/actions/app.actions';
import { AppState } from './app.state';
import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { state } from './../state-management/states/app.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  xyz: Observable<state>;
  Counter: number;

  constructor(private store: Store<AppState>) {
    console.log("This thing works :- ", store);
    this.xyz = store.select(state => state.Custom_reducer)

    this.xyz.subscribe(data => {
      console.log(data.counter);
      this.Counter = data.counter;
    })
  }


  public incrementCounter() {
    this.store.dispatch({ type: INCREMENT_ACTION });
  }

  public decrementCounter() {
    this.store.dispatch({ type: DECREMENT_ACTION });
  }
}
