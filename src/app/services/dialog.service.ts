import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})


export class DialogService {

  constructor(private http: HttpClient) { }

  getMovie(movie_id:string):Observable<any>{



    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getMovie')
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

  getSessionId():Observable<any>{

    return this.http.get<any>(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=85204a8cc33baf447559fb6d51b18313`)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of getSessionId')
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

  postMovieVote(movieId:number,guest_session_id, rating:number):Observable<any>{

    return this.http.post<any>(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=85204a8cc33baf447559fb6d51b18313&guest_session_id=${guest_session_id}`,{'value':rating},httpOptions)

    .pipe(
      retry(1),
      catchError((error:any) => {
        if (error instanceof HttpErrorResponse){     
          console.log('IN catchError of postMovieId')
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
