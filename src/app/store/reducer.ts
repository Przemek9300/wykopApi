import {
  createReducer,
  on,
  Action,
  createSelector,
  createFeatureSelector
} from "@ngrx/store";
import {
  getPost,
  getPostSuccess,
  getPostFail,
  clearPosts,
  nextPage,
  resetPage,
  setQuery,
  sortBy
} from "./actions";
import { Post } from "./model";
import { element } from "protractor";
export interface Sort {
  key: string;
  enabled: boolean;
  reversed: boolean;
}
export interface WykopState {
  page: number;
  query: string;
  posts: Post[];
  loading: boolean;
  sortBy: Sort[];
}
export const initialState: WykopState = {
  page: 1,
  posts: [],
  loading: false,
  query: "",
  sortBy: [
    { key: "author", enabled: false, reversed: false },
    { key: "vote", enabled: false, reversed: false },
    { key: "date", enabled: false, reversed: false },
    { key: "sex", enabled: false, reversed: false }

  ]
};

export const selectFeature = createFeatureSelector<WykopState>("wykop");

export const getPosts = createSelector(
  selectFeature,
  state => [...state.posts]
);
export const isEmptyPost= createSelector(
  selectFeature,
  state => state.posts.length === 0?  true : false
);
export const isLoading = createSelector(
  selectFeature,
  state => state.loading
);
export const getPage = createSelector(
  selectFeature,
  state => state.page
);
export const getQuery = createSelector(
  selectFeature,
  state => state.query
);
export const isEmptyQuery = createSelector(
  selectFeature,
  state => (state.query === "" ? true : false)
);

export const getSorter = createSelector(
  selectFeature,
  state => state.sortBy.filter(el => el.enabled === true)[0]
);

export const getSorterList = createSelector(
  selectFeature,
  state => state.sortBy
);
export const getQueryAndPage = createSelector(
  getPage,
  getQuery,
  (page, query) => {
    return {
      query: query,
      page: page
    };
  }
);

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
  on(nextPage, state => ({
    ...state,
    page: state.page + 1
  })),
  on(resetPage, state => ({
    ...state,
    page: 1
  })),
  on(setQuery, (state, data) => ({
    ...state,
    query: data.query
  })),
  on(sortBy, (state, data) => ({
    ...state,
    sortBy: [
      ...state.sortBy.map(el => {
        if (el.key === data.key) {
          el.enabled = true;
          el.reversed = data.reversed;
        } else el.enabled = false;
        return el;
      })
    ]
  }))
);

export function reducer(state: WykopState, action: Action) {
  return wykopReducer(state, action);
}
