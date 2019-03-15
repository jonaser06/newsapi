import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { RespuestaTopheadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.ApiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key' : apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { 

  }

  private ejecutarQuery<T>( query: string){
    query  = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopLines(){
    
    return this.ejecutarQuery<RespuestaTopheadlines>('/top-headlines?country=us');
    
  }

  getTopLineCategoria(categoria: string){

    return this.ejecutarQuery<RespuestaTopheadlines>('/top-headlines?country=us&category='+categoria);
    
  }
}
