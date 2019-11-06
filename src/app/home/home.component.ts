import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchResults=[]
  currentPage:number = 1; 
  currentSearch:string
  searchForm: FormGroup;
  pages:number
  constructor(private homeService:HomeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'search': new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z0-9 \'\-]+$')])
    });

    
  }

  getSearchResults(){
    this.homeService.getUserPosts(this.searchForm.controls['search'].value, 1).subscribe(resp =>{
      this.searchResults = resp.results; 
      console.log(resp);
      this.pages = resp.total_pages
      this.currentSearch = this.searchForm.controls['search'].value
    })
  }
  nextPage(){
    this.currentPage++
    this.homeService.getUserPosts(this.searchForm.controls['search'].value, this.currentPage).subscribe(resp => this.searchResults = resp.results)
  }
  previousPage(){
    this.currentPage--
    this.homeService.getUserPosts(this.searchForm.controls['search'].value, this.currentPage).subscribe(resp => this.searchResults = resp.results)
  }


}
