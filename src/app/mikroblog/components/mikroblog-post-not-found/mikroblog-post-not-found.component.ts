import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  WykopState,
  isEmptyQuery,
  isLoading,
  isEmptyPost
} from "src/app/store/reducer";

@Component({
  selector: "app-mikroblog-post-not-found",
  templateUrl: "./mikroblog-post-not-found.component.html",
  styleUrls: ["./mikroblog-post-not-found.component.scss"]
})
export class MikroblogPostNotFoundComponent implements OnInit {
  public isEmptyQuery: boolean;
  public isEmptyPost: boolean;
  public isloading: boolean;

  constructor(private store: Store<WykopState>) {}

  ngOnInit() {
    this.store
      .select(isEmptyQuery)
      .subscribe(emptyQuery => (this.isEmptyQuery = emptyQuery));
    this.store
      .select(isEmptyPost)
      .subscribe(emptyArray => (this.isEmptyPost = emptyArray));

    this.store
      .select(isLoading)
      .subscribe(isLoading => (this.isloading = isLoading));
  }
}
