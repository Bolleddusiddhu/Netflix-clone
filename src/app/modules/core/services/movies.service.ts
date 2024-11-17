import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  options: any = {
    params: {
      include_adult: 'false',
      include_video: 'true',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjcwY2RlMGE4OTAzZmYzMTQ2OWNiMzI1M2I1ZTZjNiIsIm5iZiI6MTczMTYwNTgzNy42MzAxNTA2LCJzdWIiOiI2NzM2MzAxY2Q0ZmZiYTFlOGIyYWZiMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dQ9sXnRRbuoungMkFQ9Wo5G5ypD3tuT5pIv0AxBQwIY"
    }
  }

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', this.options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', this.options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', this.options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, this.options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, this.options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, this.options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', this.options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', this.options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', this.options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', this.options)
  }
}
