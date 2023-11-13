import { Injectable, OnInit } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService implements OnInit {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: '',
  })

  constructor() { }

  ngOnInit(): void {
  }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
