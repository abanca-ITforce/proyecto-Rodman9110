import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountresService {

  constructor(private http:HttpClient) { }

  Chararter='';
  URL='https://api.worldbank.org/v2/country?per_page=1000&format=json';
  ID_COUNTRY='';
  URL_COUNTRY =`https://api.worldbank.org/v2/country/${this.ID_COUNTRY}?per_page=1000&format=json`;
  

  getAllCountres(){
    return this.http.get<any[]>(this.URL)
    .pipe(map(data =>(data[1])));
  }
  getCountryId(countryId: string){
    let URL_COUNTRY =`https://api.worldbank.org/v2/country/${countryId}?per_page=1000&format=json`;
    console.log(URL_COUNTRY);
    return this.http.get<any>(URL_COUNTRY);
  }
}
