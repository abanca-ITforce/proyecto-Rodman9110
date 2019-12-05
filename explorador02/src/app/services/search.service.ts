import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  URL_INCOMELEVEL ='https://api.worldbank.org/v2/incomeLevel/?format=json';  
  URL_LEADING_TYPE ='https://api.worldbank.org/v2/lendingType/?format=json'
  URL_REGIONS ='https://api.worldbank.org/v2/region/?format=json'

  URL_SEARCH = 'https://api.worldbank.org/v2/country?lendingType=';
  PARAMETRO_INCOMELEVEL='&incomeLevel=';
  PARAMETRO_REGION='&region='
  PARAMETRO_incomeLevel ='&incomeLevel=HIC&region=ECS&per_page=1000&format=json'
  PARAMETRO_FINAL ='&per_page=1000&format=json';


  constructor(private http: HttpClient) { }

  getSearchIncomeLevelOptions$(){
    console.log(this.URL_INCOMELEVEL);
   return this.http.get<any[]>(this.URL_INCOMELEVEL)
    .pipe(map(data => data[1]));
  }
  getSearchLeadingType$(){
    console.log(this.URL_LEADING_TYPE);
   return this.http.get<any[]>(this.URL_LEADING_TYPE)
    .pipe(map(data => data[1]));
  }
  getSearchRegions$(){
    console.log(this.URL_REGIONS);
   return this.http.get<any[]>(this.URL_REGIONS)
    .pipe(map(data => data[1]));
  }
  getSearchLendingType$(lendingType){
    const url = this.URL_SEARCH+lendingType+this.PARAMETRO_FINAL;
    console.log(url);
    return this.http.get<any[]>(url)
    .pipe(map(data => data[1][0]));
  }

  getSearchLendingType_LevelOptions_Regions$(lendingType,levelOptions,regions){
    

    const url = this.URL_SEARCH+lendingType+this.PARAMETRO_INCOMELEVEL+levelOptions+this.PARAMETRO_REGION+regions+this.PARAMETRO_FINAL;
    console.log(url);
    return this.http.get<any[]>(url)
    .pipe(map(data => data[1]));

    
  }




}
