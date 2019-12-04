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
    return this.http.get<any[]>(this.URL_REGIONS)
    .pipe(map(data =>(data[1])));
  }

}
