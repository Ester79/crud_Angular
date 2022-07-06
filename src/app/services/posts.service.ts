import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts.interface';
import { Comments } from '../interfaces/comments.interface';
import { NewPosts } from '../interfaces/newPost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url: string = 'https://jsonplaceholder.typicode.com/';
  endpointListPosts: string = 'https://jsonplaceholder.typicode.com/posts'
  post: any = null; // post Id by default initilized with 0
  list: Posts[] = [];
  singlePost: any;
  newPostIdAdde: any;

  constructor(private httpClient: HttpClient) { }


  // Get/Set postID selected from table
  get postIDSelected(){
    return this.post;
  }

  set postIDSelected(value: Posts){
    this.post = value;
  }


  // Get all posts
  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${this.endpointListPosts}`);
  }

  // Get comments by postID
  getCommentsByPostID(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`${this.url}comments?postId=${this.post.id}`);
  }

   // Update or Create post
  updateCreatePost(body: Posts): Observable<Posts> {
    if(body.id == null){
      return this.httpClient.post<Posts>(`${this.url}posts`, body);
    }else{
      return this.httpClient.put<Posts>(`${this.endpointListPosts}/${this.post.id}`, body);
    }
  }

  // Get post by Id
  getPostByID(): Observable<Posts>{
    return this.httpClient.get<Posts>(`${this.endpointListPosts}/${this.post.id}`)
  }

  // Delete post selected
  deletePostID() {
     this.httpClient.delete(`${this.endpointListPosts}/${this.post.id}`).subscribe(() => console.log( 'Delete successful'));
  }


}
