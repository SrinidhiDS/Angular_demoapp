import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApiserviceService} from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from "./posts/posts.component";
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        ChildAComponent,
        PostsComponent,
        CommentsComponent,
        AlbumsComponent,
        PhotosComponent,
        TodosComponent
    ],
    providers: [ApiserviceService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialExampleModule,
        BrowserAnimationsModule,
        FormsModule
    ]
})
export class AppModule { }
