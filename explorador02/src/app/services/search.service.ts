import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  URL_INCOMELEVEL ='https://api.worldbank.org/v2/incomeLevel/?format=json';  
  
  constructor(private http: HttpClient) { }

  getSearchIncomeLevelOptions(){
    console.log(this.URL_INCOMELEVEL);
   return this.http.get<any[]>(this.URL_INCOMELEVEL)
    .pipe(map(data => data[1][0]));
  }
}
