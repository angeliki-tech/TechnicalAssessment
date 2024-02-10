import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgbPaginationModule, NgbDropdownModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchText: string = "batman";
  movies: any;
  moviesStore: any;
  page: number = 1;
  totalResults: any;
  size = 6;
  enablePagination: boolean = false;
  category: string = "";
  IsDarkMode: boolean = false;
  constructor(private search: SearchService) {

  }

  ngOnInit() {
    this.getMovies(this.searchText);
  }

  getMovies(title: string) {

    this.search.getMoviesData(title).subscribe(data => {
      debugger
      this.movies = data;
      this.totalResults = this.movies.totalResults;
      
     var pages = this.totalResults == 0 ? 0 : (this.totalResults - 1) / 10 + 1;
      this.enablePagination = true;
      this.movies = this.movies.Search;
      
    });
  }

 

  pageChange(event: any) {
    this.search.getMoviesDataPages(this.searchText, this.page, this.category).subscribe(data => {
      debugger
      this.movies = data;
      this.enablePagination = true;
      this.movies = this.movies.Search;
    });
  }

  onSearchChange(text: any) {
    debugger
    this.enablePagination = false;
    this.getMovies(this.searchText);
  }

  ClickCategory(category: string) {
    this.category = category;
    this.search.getMoviesDataPerCat(this.searchText, category).subscribe(data => {
      debugger
      this.movies = data;
      this.totalResults = this.movies.totalResults;

      var pages = this.totalResults == 0 ? 0 : (this.totalResults - 1) / 10 + 1;
     
      this.movies = this.movies.Search;
    });
  }
}
