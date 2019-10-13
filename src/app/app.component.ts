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
import { Post } from "./store/model";
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
  constructor() {}

  ngOnInit(): void {}
}
