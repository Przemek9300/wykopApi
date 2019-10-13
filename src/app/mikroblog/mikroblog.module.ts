import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MikroblogSearchComponent } from "./components/mikroblog-search/mikroblog-search.component";
import { MikroblogListComponent } from "./components/mikroblog-list/mikroblog-list.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ClipboardModule } from "ngx-clipboard";
import { SortBy } from "./pipes/sortBy";
import { MaterialModule } from "../material/material.module";
import { MikroblogPostComponent } from "./components/mikroblog-post/mikroblog-post.component";
import { MikroblogPostNotFoundComponent } from "./components/mikroblog-post-not-found/mikroblog-post-not-found.component";
@NgModule({
  declarations: [
    MikroblogListComponent,
    MikroblogSearchComponent,
    MikroblogPostComponent,
    MikroblogPostNotFoundComponent,
    SortBy
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ClipboardModule
  ],
  exports: [
    MikroblogListComponent,
    MikroblogSearchComponent,
    MikroblogPostComponent,
    MikroblogPostNotFoundComponent
  ]
})
export class MikroblogModule {}
