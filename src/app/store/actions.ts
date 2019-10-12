import { createAction, props } from "@ngrx/store";
import { Datum } from "./model";

export const getPost = createAction(
  "[Wykop Post] Get Post",
  props<{ tag: string; page: number }>()
);
export const getPostSuccess = createAction(
  "[Wykop Post] Get Post Success",
  props<{ post: Datum[] }>()
);
export const clearPosts = createAction("[Wykop Post] clear Post");
export const nextPage = createAction("[Wykop Post] next Page");
export const resetPage = createAction("[Wykop Post] reset Page");

export const getPostFail = createAction("[Wykop Post] Get Post Fail");
