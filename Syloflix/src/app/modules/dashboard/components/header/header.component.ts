import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  searchForm: FormGroup;
  finalInput = "";
  isMenuOpen = false;

  constructor(private _router: Router, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchInput: ''
    });
  }

  salir(): void {
    localStorage.setItem('isLogged', 'false');
    this._router.navigate(['']);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currentScrollPos === 0) {
      this.isScrolled = false;
    } else {
      this.isScrolled = true;
    }
  }

  searchMovieShow(): void {
    const searchInputValue = this.searchForm.get('searchInput')?.value;
    const finalInput = searchInputValue?.replace(/\s/g, '_');
    this._router.navigate(['/search'], { queryParams: { name: finalInput } }).then(() => {
      window.location.reload();
    });
  }
  
}
