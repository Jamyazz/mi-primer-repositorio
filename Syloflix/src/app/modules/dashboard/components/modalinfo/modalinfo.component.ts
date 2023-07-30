import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalinfo',
  templateUrl: './modalinfo.component.html',
  styleUrls: ['./modalinfo.component.scss'],
})
export class ModalinfoComponent {
  @Input() peli: any;
  percent: number = 0;
  locationRoute: any;

  constructor(private location: Location, private _router: Router) {
    this.locationRoute = this.location.path();
  }

  getMovie(): void {

  }

  randomForYou() {
    this.percent = Math.floor(Math.random() * 101);
  }

  destroyMovie(): void {
    
    this.peli = null;

    document.body.classList.remove('no-scroll');
    
  }

  addToFavorite(movie: any) {
    let listaGuardada: any = localStorage.getItem("myFavoriteList");
    let miListaRecuperada: any[] = JSON.parse(listaGuardada) || [];
  
    const movieIndex = miListaRecuperada.findIndex((favMovie) => favMovie.title === movie.title);
  
    if (movieIndex === -1) {
      miListaRecuperada.push(movie);
    } else {
      miListaRecuperada.splice(movieIndex, 1);
      if (this.locationRoute === '/mylist') {
        location.reload();
      }
    } 
    let listaJSON = JSON.stringify(miListaRecuperada);
    localStorage.setItem("myFavoriteList", listaJSON);
  }
  
  favorited(movieTitle: string) {

    const listaGuardada: any = localStorage.getItem("myFavoriteList");

    const miListaRecuperada: any[] = JSON.parse(listaGuardada) || [];
    
    return miListaRecuperada.some((favMovie) => favMovie.title === movieTitle);

  }

  searchMovieShow(): void {
    const searchInputValue = this.peli.title;
    const finalInput = searchInputValue?.replace(/\s/g, '_');
    const words = finalInput?.split('_').slice(0, 1);
    const finalString = words?.join('_');
    this._router.navigate(['/browse/aat/search'], { queryParams: { name: finalString } }).then(() => {
      window.location.reload();
    });
  }

}
