import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  movieserie = "";

  options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzVlNDE0ZDdhMDNiODNiNmRiNzE1Y2Q0MThlZDA0NiIsInN1YiI6IjY0YTZmNjdkNzI0ZGUxMDBmZmY3ZTk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLblI2ECQWN38EgNokG70v2LB_P8D6WRNbYP6QW_1LM'
    })
  };

  uri = "https://api.themoviedb.org";
  API_KEY = "935e414d7a03b83b6db715cd418ed046";


  getSeriesAndMovies(seccion: string, index: string): Observable<any> {

    let response$: any;

    if (((index != "popular") && (seccion == "movie")) || (seccion == "tv")) {

      response$ = this._HTTP.get(`${this.uri}/3/discover/${seccion}?page=${index}`, this.options);

    } else if (index == "popular") {
      
      response$ = this._HTTP.get(`${this.uri}/3/${seccion}/${index}`, this.options);

    }

    return response$.pipe(

      timeout(60000)
      
    );
        
  }

  searchMovieShow(seriemovie: string): Observable<any> {

    for (let i = 0; i < seriemovie.length; i++) {
      if (seriemovie.substring(i, i + 1) == "_") {
        this.movieserie += "+";
      } else {
        this.movieserie += seriemovie.substring(i, i + 1);
      }
    }
    const searched$ = this._HTTP.get(`${this.uri}/3/search/movie?query='${this.movieserie}'&api_key='${this.API_KEY}'`, this.options)
    return searched$.pipe(
      timeout(60000)
    );
    
  }

  constructor(private _HTTP: HttpClient) { }

}
