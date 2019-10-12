import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WykopService } from '../wykop.service';
import { getPost, getPostSuccess, getPostFail } from './actions';
 
@Injectable()
export class WykopEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(getPost),
    mergeMap((data) => this.wykopService.getPost(data.tag, data.page)
      .pipe(
        map(data => getPostSuccess({post:data.data?data.data:[]})),
        catchError(() => of(getPostFail()))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private wykopService: WykopService
  ) {}
}