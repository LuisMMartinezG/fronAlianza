import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterViewModelService {
  isHidden = false;
  constructor() { }

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
