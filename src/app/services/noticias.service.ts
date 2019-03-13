import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopheadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { 

  }

  getTopLines(){
    return this.http.get<RespuestaTopheadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=fb9c042b85a446d983a2e0a1d0a35413');
  }
}
