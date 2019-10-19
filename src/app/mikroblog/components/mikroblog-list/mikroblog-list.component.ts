import { Component, OnInit } from "@angular/core";
import {
  WykopState,
  getPosts,
  Sort,
  getSorter,
  isLoading,
  isEmptyQuery
} from "../../../store/reducer";
import { Store } from "@ngrx/store";

import { nextPage, getPost } from "../../../store/actions";
import { Post } from "src/app/store/model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { timingSafeEqual } from 'crypto';

@Component({
  selector: "app-mikroblog-list",
  templateUrl: "./mikroblog-list.component.html",
  styleUrls: ["./mikroblog-list.component.scss"]
})
export class MikroblogListComponent implements OnInit {
  private data: Post[];
  private sort: Sort;
  constructor(private store: Store<WykopState>) {}
  ngOnInit(): void {
    this.store.select(getPosts).subscribe(data => (this.data = data.map(el=>{
      el.tags = el.body.split(' ').filter(x=>x.startsWith('#'))
      return el;
    })));
    this.store.select(getSorter).subscribe(sort => (this.sort = sort));
    this.store.dispatch(getPost());
  }
  public onScroll() {
    this.store.dispatch(nextPage());
    this.store.dispatch(getPost());
  }
}
