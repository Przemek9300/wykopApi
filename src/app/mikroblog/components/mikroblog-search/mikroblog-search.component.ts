import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import {
  clearPosts,
  resetPage,
  getPost,
  setQuery,
  sortBy
} from "../../../store/actions";
import { Store } from "@ngrx/store";
import {
  WykopState,
  Sort,
  getSorterList,
  getQuery
} from "../../../store/reducer";

@Component({
  selector: "app-mikroblog-search",
  templateUrl: "./mikroblog-search.component.html",
  styleUrls: ["./mikroblog-search.component.scss"]
})
export class MikroblogSearchComponent implements OnInit {
  queryControl = new FormControl("");
  query = "";
  sortList: Sort[];
  constructor(private store: Store<WykopState>) {}

  ngOnInit() {
    this.store.select(getSorterList).subscribe(list => (this.sortList = list));
    this.store.select(getQuery).subscribe(query => (this.query = query));
    this.queryControl.valueChanges.pipe(debounceTime(1000)).subscribe(query => {
      this.store.dispatch(clearPosts());
      this.store.dispatch(resetPage());
      this.store.dispatch(setQuery({ query: query }));
      this.store.dispatch(getPost());
    });
  }
  public sort(sort: Sort) {
    this.store.dispatch(sortBy({ key: sort.key, reversed: !sort.reversed }));
  }
}
