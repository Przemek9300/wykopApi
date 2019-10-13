import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import {
  map,
  mergeMap,
  catchError,
  withLatestFrom,
  switchMap,
  concatMap
} from "rxjs/operators";
import { WykopService } from "../wykop.service";
import { getPost, getPostSuccess, getPostFail } from "./actions";
import { WykopState, getQueryAndPage } from "./reducer";
import { Store } from "@ngrx/store";

@Injectable()
export class WykopEffects {
  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      withLatestFrom(this.store.select(getQueryAndPage)),
      concatMap(([action, storeState]) =>     
         this.wykopService.getPost(storeState.query, storeState.page).pipe(
          map(data => getPostSuccess({ post: data.data ? data.data : [] })),
          catchError(() => of(getPostFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private wykopService: WykopService,
    private store: Store<WykopState>
  ) {}
}
