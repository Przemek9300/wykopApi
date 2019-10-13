import { Component, OnInit } from "@angular/core";
import {
  WykopState,
  getPosts,
  Sort,
  getSorter,
} from "../../../store/reducer";
import { Store } from "@ngrx/store";

import {
  nextPage,
  getPost
} from "../../../store/actions";

@Component({
  selector: "app-mikroblog-list",
  templateUrl: "./mikroblog-list.component.html",
  styleUrls: ["./mikroblog-list.component.scss"]
})
export class MikroblogListComponent implements OnInit {
  private data;
  private sort: Sort
  constructor(
    private store: Store<WykopState>,
  ) {}
  ngOnInit(): void {
    this.data = this.store.select(getPosts);
    this.store.select(getSorter).subscribe(sort=>this.sort = sort)
    this.store.dispatch(getPost());
  }
  public onScroll() {
    this.store.dispatch(nextPage());
    this.store.dispatch(getPost());
  }
}
