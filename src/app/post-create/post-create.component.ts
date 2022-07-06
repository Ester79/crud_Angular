import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Posts } from '../interfaces/posts.interface';
import { useImperativeHandle } from 'preact/hooks';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPostId: Posts = {};

  formNewPost = this.fb.group({
    userId: new FormControl('', Validators.required),
    //postNumber: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
    private rountingModule: AppRoutingModule,
    public postsServices: PostsService,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.newPostId = this.postsServices.postIDSelected;
  }


  submit(){
    const post = {
      id: this.postsServices.postIDSelected.id,
      title: this.formNewPost.get("title")?.value?.toString(),
      body: this.formNewPost.get("body")?.value?.toString(),
      userId: Number(this.formNewPost.get("userId")?.value),
    }
    if(this.formNewPost.invalid){
      Swal.fire('Incomplete!', 'Please, complete the fields required', 'error');
    }else{
      this.postsServices.updateCreatePost(post).subscribe(data => {
        this.postsServices.postIDSelected = data;
        this.newPostId = data;
        console.log("New Post ");
        console.log(this.newPostId);
        Swal.fire('Saved! ', ' Post saved successfully!', 'success');
        this.router.navigateByUrl('/list')
     });

    }

  }

}
