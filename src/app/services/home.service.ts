import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  getUserPosts(searchWord:string, page:number):Observable<any>{

    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&query=${searchWord}&page=${page}&include_adult=false`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getUserPosts')
          console.log(error.error.message)
          console.log(error.status)            
        }else{
          
          console.log('helooo from else')        
        }
        
        return throwError(
          'Something bad happened; please try again later.');
      })
      
    );
  }
}
