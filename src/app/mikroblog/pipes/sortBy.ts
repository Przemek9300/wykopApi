import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "src/app/store/model";
import { Store } from "@ngrx/store";
import { WykopState, Sort } from "src/app/store/reducer";
import { post } from "selenium-webdriver/http";

@Pipe({ name: "sortBy" })
export class SortBy implements PipeTransform {
  private sortedPost: Post[];
  transform(posts: Post[], sort: Sort) {
    if (sort) {
      switch (sort.key) {
        case "author":
          this.sortedPost = posts.sort((a, b) =>
            a.author.login > b.author.login ? 1 : -1
          );
          break;
        case "vote":
          this.sortedPost = posts.sort((a, b) => b.vote_count - a.vote_count);
          break;

        case "date":
          this.sortedPost = posts.sort((a, b) => {
            return <any>new Date(a.date) - <any>new Date(b.date);
          });
          break;
      }
      return sort.reversed ? this.sortedPost.reverse() : this.sortedPost;
    }
    return posts;
  }
}
