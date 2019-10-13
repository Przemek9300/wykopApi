import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/store/model';

@Component({
  selector: 'app-mikroblog-post',
  templateUrl: './mikroblog-post.component.html',
  styleUrls: ['./mikroblog-post.component.scss']
})
export class MikroblogPostComponent implements OnInit {
  @Input() post: Post[] 
  constructor() { }

  ngOnInit() {
  }

}
