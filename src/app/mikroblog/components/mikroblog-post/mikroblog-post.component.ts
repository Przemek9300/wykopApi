import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/store/model";
import { Store } from "@ngrx/store";
import { WykopState } from "src/app/store/reducer";
import {
  setQuery,
  getPost,
  clearPosts,
  resetPage
} from "src/app/store/actions";

@Component({
  selector: "app-mikroblog-post",
  templateUrl: "./mikroblog-post.component.html",
  styleUrls: ["./mikroblog-post.component.scss"]
})
export class MikroblogPostComponent implements OnInit {
  @Input() post: Post[];
  constructor(private store: Store<WykopState>) {}

  ngOnInit() {}
  tagHandler(tag: string) {
    this.store.dispatch(clearPosts());
    this.store.dispatch(resetPage());
    this.store.dispatch(setQuery({ query: tag.replace("#", "") }));
    this.store.dispatch(getPost());
  }
}
