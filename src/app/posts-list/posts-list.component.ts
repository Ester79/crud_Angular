import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PostsService} from '../services/posts.service';
import { Posts } from '../interfaces/posts.interface';
import { findIndex } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postList: Posts[] = [];

  filterPost = '';

  constructor(
    private router: Router,
    private rountingModule: AppRoutingModule,
    public postsServices: PostsService) { }



  ngOnInit(): void {
    this.loadList();

  }


  loadList(): void{
     this.postsServices.getPosts().subscribe(data => this.postList = data);
  }

  selectedPostID(post:Posts){
    this.postsServices.postIDSelected = post;
  }

  deletePost(idPost: Posts){
    this.postsServices.postIDSelected = idPost;
    this.postsServices.deletePostID();
    const index = this.postList.indexOf(idPost);
    if(index > -1){
      this.postList.splice(index, 1);
      Swal.fire('Removed! ', 'See console message. The database is protected', 'success');
    }
  }


  createNewPost(){
    this.postsServices.postIDSelected =  {};
  }

}
