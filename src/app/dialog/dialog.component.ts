import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../services/dialog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit,OnDestroy {
  movieId:number
  movie:Object
  sessionId:number
  collection:string
  collections=[]
  currentRate:number;
  constructor(private route: ActivatedRoute, private dialogService:DialogService, private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id']
      this.dialogService.getMovie(params['id']).subscribe(resp => this.movie = resp)
    })
    this.collections = JSON.parse(localStorage.getItem("collections"));
    
  }
  close(){
    this.location.back()
  }
  vote(){
    this.currentRate = 1
    this.dialogService.getSessionId().subscribe(resp => this.sessionId = resp.guest_session_id)
  }
  submitVote(){
    this.dialogService.postMovieVote(this.movieId,this.sessionId,this.currentRate).subscribe(resp=> console.log(resp))
    this.currentRate = 0
  }
  updateCollection(collection){
    this.collections.filter(col => {
    if( col.title == collection){
        col.movies.push(this.movie)

    };} )
  }

  ngOnDestroy(){
    localStorage.setItem("collections",JSON.stringify(this.collections));
  }

}
