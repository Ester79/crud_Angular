import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PostsService } from '../services/posts.service';
import { Comments } from '../interfaces/comments.interface';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  commentsList: Comments[] = [];



  constructor(private router: Router,
    private rountingModule: AppRoutingModule,
    public postsServices: PostsService) { }

  ngOnInit(): void {
    this.loadComments();

  }

  loadComments(): void {
    this.postsServices.getCommentsByPostID().subscribe(commentsData => this.commentsList = commentsData);
  }

}
