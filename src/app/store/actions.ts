import { createAction, props } from "@ngrx/store";
import { Post } from "./model";

export const getPost = createAction("[Wykop Post] Get Post");
export const getPostSuccess = createAction(
  "[Wykop Post] Get Post Success",
  props<{ post: Post[] }>()
);
export const getPostFail = createAction("[Wykop Post] Get Post Fail");
export const clearPosts = createAction("[Wykop Post] clear Post");
export const nextPage = createAction("[Wykop Post] next Page");
export const resetPage = createAction("[Wykop Post] reset Page");
export const setQuery = createAction(
  "[Wykop Post] set query",
  props<{ query: string }>()
);
export const sortBy = createAction(
  "[Wykop Post] sort by",
  props<{ key: string, reversed: boolean }>()
);