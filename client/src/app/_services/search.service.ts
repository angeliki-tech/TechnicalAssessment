import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = 'https://www.omdbapi.com/';
  constructor(private http: HttpClient) { }



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
