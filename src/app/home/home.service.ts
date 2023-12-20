import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductsCollection } from './home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = "https://fakestoreapi.com"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProductsCollection[]> {
    return this.http.get<IProductsCollection[]>(`${this.baseUrl}/products`)
  }
}
