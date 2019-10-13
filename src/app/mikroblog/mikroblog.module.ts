import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MikroblogSearchComponent } from "./components/mikroblog-search/mikroblog-search.component";
import { MikroblogListComponent } from "./components/mikroblog-list/mikroblog-list.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ClipboardModule } from 'ngx-clipboard';
import { SortBy } from './pipes/sortBy';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [MikroblogListComponent, MikroblogSearchComponent, SortBy],
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ClipboardModule
  ],
  exports: [MikroblogListComponent, MikroblogSearchComponent]
})
export class MikroblogModule {}
