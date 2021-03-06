import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http:HttpClient) { }


  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,cioc,flag,population' );
  }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPorCodigo(id: string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }
}
