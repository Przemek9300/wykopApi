import {
  createReducer,
  on,
  Action,
  createSelector,
  createFeatureSelector
} from "@ngrx/store";
import { getPost, getPostSuccess, getPostFail, clearPosts, nextPage, resetPage } from "./actions";
import { Datum } from "./model";
export interface WykopState {
  page: number;
  posts: Datum[];
  loading: boolean;
}

export const selectFeature = createFeatureSelector<WykopState>("wykop");

export const getPosts = createSelector(
  selectFeature,
  state => state.posts
);
export const isLoading = createSelector(
  selectFeature,
  state => state.loading
);
export const getPage = createSelector(
  selectFeature,
  state => state.page
);
export const initialState: WykopState = {
  page: 1,
  posts: [],
  loading: false
};

const wykopReducer = createReducer(
  initialState,
  on(getPost, state => ({ ...state, loading: true })),
  on(getPostSuccess, (state, data) => ({
    ...state,
    posts: [...state.posts, ...data.post],
    loading: false
  })),
  on(getPostFail, state => ({
    ...state,
    posts: [],

    loading: false
  })),
  on(clearPosts, state => ({
    ...state,
    posts: []
  })),
  on(nextPage, state=>({
    ...state,
    page: state.page+1
  })),
  on(resetPage, state=>({
    ...state,
    page: 1
  }))
);

export function reducer(state: WykopState, action: Action) {
  return wykopReducer(state, action);
}
