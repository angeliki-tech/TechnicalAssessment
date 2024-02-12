import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MovieDetails {
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
  Title: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = 'https://www.omdbapi.com/';

  private movieD$ = new BehaviorSubject<MovieDetails>(<MovieDetails>({ Poster: '', Type: '', Year: '', imdbID: '', Title: '' }));
  currentMovie$ = this.movieD$.asObservable();

  constructor(private http: HttpClient) {
   
  }


 
 
  SetMovie(mov: MovieDetails) {
    debugger
    this.movieD$.next(mov);
  }
  getMoviesData(searchText: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
        'Accept': '*/*',
      })
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.get(this.url + "?apikey=21923d76" + "&s=" + searchText, httpOptions);

  }

  getMoviesDataPages(searchText: string, page: number, category:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
        'Accept': '*/*',
      })
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.get(this.url + "?apikey=21923d76" + "&s=" + searchText + "&type=" + category + "&page=" + page, httpOptions);

  }

  getMoviesDataPerCat(searchText: string, category: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
        'Accept': '*/*',
      })
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.get(this.url + "?apikey=21923d76" + "&s=" + searchText + "&type=" + category.toLocaleUpperCase(), httpOptions);
  }
}
