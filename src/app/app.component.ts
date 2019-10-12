import { Component, OnInit } from "@angular/core";
import { WykopService } from "./wykop.service";
import {
  WykopState,
  getPosts,
  selectFeature,
  isLoading,
  getPage
} from "./store/reducer";
import { Store } from "@ngrx/store";
import { getPost, clearPosts, resetPage, nextPage } from "./store/actions";
import { Datum } from "./store/model";
import { FormControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private data: Datum [];
  private query = "";
  private page: number
  queryControl = new FormControl(this.query);

  constructor(
    private store: Store<WykopState>,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.store.select(isLoading).subscribe(loading => {
      if (loading) this.spinner.show();
      else this.spinner.hide();
    });
    this.store.select(getPage).subscribe(page => (this.page = page));
    this.queryControl.valueChanges.pipe(debounceTime(1000)).subscribe(query => {
      this.query = query;
      this.store.dispatch(clearPosts());
      this.store.dispatch(resetPage());
      this.fetchData();
    });
    this.store.select(getPosts).subscribe(data => {
      this.data = data.filter(x => x.embed !== null);      
    });
    this.fetchData();
  }
  private onScroll() {
    this.store.dispatch(nextPage())
    this.fetchData();
  }
  private fetchData() {
    this.store.dispatch(getPost({ tag: this.query, page: this.page }));
  }
  private sort(){
    this.data = this.data.sort((a,b)=>b.vote_count - a.vote_count)
  }
}
