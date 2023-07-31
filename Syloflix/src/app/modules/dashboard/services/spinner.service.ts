import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerService: NgxSpinnerService) { }

  public callSpinner(){
    document.body.classList.add('no-scroll');
    this.spinnerService.show();
  }

  public stopSpinner(){
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      this.spinnerService.hide();
    }, 2000);
    
  }
}
