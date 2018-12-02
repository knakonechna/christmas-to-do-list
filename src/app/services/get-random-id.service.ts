import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetRandomIdService {
  constructor() { }
  static getID(): string {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }
}
