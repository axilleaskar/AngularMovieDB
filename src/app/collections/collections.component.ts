import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit, OnDestroy {
  data: any[] = [];
  movies=[]
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  description:string;
  title:string;

  newCol:boolean = false;
  save:boolean = true;
  displayedColumns: string[] = ['title', 'description','action'];
  constructor() { }

  ngOnInit() {
   this.data = JSON.parse(localStorage.getItem("collections"))
  }

  newCollection(){
    this.newCol = true;
  }
  saveCollection(){
    this.data = this.data || [];
    this.data.push({title: this.title,description:this.description, movies:[]})
    this.newCol = false;
    
    this.title = ''
    this.description = ''
    this.data = [...this.data]
  }

  ngOnDestroy(){
    localStorage.setItem("collections",JSON.stringify(this.data));
  }

  showMovies(movies){
    this.movies = movies
  }
  deleteMovie(index){
    this.movies.splice(index,1)
   
  }

}
