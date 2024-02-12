import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchService, MovieDetails } from '../_services/search.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  movieDetails: any;
  subMovie: Subscription | undefined;
  IsDarkMode: boolean = false;
  constructor(private search: SearchService) {

  }

  ngOnInit() {
    this.subMovie = this.search.currentMovie$.subscribe(movieDet => {
      debugger
      this.onMovieChange(movieDet);
    
    })
    this.movieDetails = JSON.parse(localStorage.getItem('movie') || '{}');

    this.CheckDarkMode();
  }

  onMovieChange(movie: MovieDetails) {
    debugger
    console.log(movie);
    this.movieDetails = movie;
    
  }

  ngOnDestroy() {
    if (this.subMovie) {
      this.subMovie.unsubscribe();
    }
  }

  CheckDarkMode() {
    this.IsDarkMode = JSON.parse(localStorage.getItem('IsDarkMode') || 'false');
  }

  onDarkModeChange(e: any) {

    localStorage.setItem("IsDarkMode", JSON.stringify(this.IsDarkMode));

  }
}
