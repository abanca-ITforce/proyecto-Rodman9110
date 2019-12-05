import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  URL_COUNTRIES ='https://api.worldbank.org/v2/country';
  PARAMETROS = '?per_page=1000&format=json';
  URL_COUNTRY = 'https://api.worldbank.org/v2/country/';
  PARAMETROS_COUNTRY ='?per_page=1000&format=json';


  constructor(private http: HttpClient) { }

  getAllCountres$(){
    const url = this.URL_COUNTRIES + this.PARAMETROS;
     return this.http.get<any[]>(url).pipe(map( data =>( data[1] )))
    // this.http.get<any[]>(url).pipe(map( data => {
    //   let finalData  = [];
    //   data[1].forEach(cur => {
    //     if (cur.capitalCity) {
    //       finalData.push(cur);
    //     }
    //   });
    //   return finalData;
    // } ))
    
  }
  getCountry$(countryId){
    const url = this.URL_COUNTRY+countryId+this.PARAMETROS;
    console.log(url);
    return this.http.get<any>(url).pipe(map(date =>date[1][0]));

  }
  getCountriesByRegionCode(regionCode: any){
    const url = this.URL_COUNTRIES +this.PARAMETROS +"&region="+regionCode;
    console.log(url);
    return this.http.get<any[]>(url)
    .pipe(map(data => data[1]));
  }
}
