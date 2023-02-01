import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ChildAComponent } from './child-a/child-a.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {path: 'users-component', component: ChildAComponent},
  {path: 'posts-component', component: PostsComponent },
  { path: 'comments-component', component: CommentsComponent },
  { path: 'albums-component', component: AlbumsComponent },
  { path: 'photos-component', component: PhotosComponent },
  { path: 'todos-component', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
