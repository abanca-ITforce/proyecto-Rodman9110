import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  URL_REGIONS ='https://api.worldbank.org/v2/region/?format=json';

  constructor(private http: HttpClient) { }


  getAllRegions$() {
    const url = this.URL_REGIONS;
    console.log(url);
    return this.http.get<any[]>(url)
    .pipe(map(data =>(data[1])));
  }

}
