import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Import the components/views
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { PostCreateComponent } from './post-create/post-create.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'}, // First view to display when load the application
  {path: 'list', component: PostsListComponent},
  {path: 'comments', component: CommentsListComponent},
  {path: 'create', component: PostCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
