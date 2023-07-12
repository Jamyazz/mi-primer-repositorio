import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzVlNDE0ZDdhMDNiODNiNmRiNzE1Y2Q0MThlZDA0NiIsInN1YiI6IjY0YTZmNjdkNzI0ZGUxMDBmZmY3ZTk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLblI2ECQWN38EgNokG70v2LB_P8D6WRNbYP6QW_1LM'
    })
  };

  uri = "https://api.themoviedb.org";

  getMoviesPopular(): Observable<any> {
    return this._HTTP.get(`${this.uri}/3/movie/popular`, this.options);
  }

  constructor(private _HTTP: HttpClient) { }

}
