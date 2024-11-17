import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IVideoContent } from '../../models/video-content-niterface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  constructor(private moviesService: MoviesService) {
    this.getAllEntertainmentDetails();
  }

  getAllEntertainmentDetails() {
    this.moviesService.getMovies().subscribe((res: any) => {
      this.movies = res?.results;
    });

    this.moviesService.getTvShows().subscribe((res: any) => {
      this.tvShows = res?.results;
    });

    this.moviesService.getRatedMovies().subscribe((res: any) => {
      this.ratedMovies = res?.results;
      console.log(this.ratedMovies);

    });

    this.moviesService.getNowPlayingMovies().subscribe((res: any) => {
      this.nowPlayingMovies = res?.results;
    });

    this.moviesService.getUpcomingMovies().subscribe((res: any) => {
      this.upcomingMovies = res?.results;
    });

    this.moviesService.getPopularMovies().subscribe((res: any) => {
      this.popularMovies = res?.results;
    });

    this.moviesService.getTopRated().subscribe((res: any) => {
      this.topRatedMovies = res?.results;
    });
  }
}
