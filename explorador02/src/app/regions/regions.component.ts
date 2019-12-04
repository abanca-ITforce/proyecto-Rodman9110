import { Component, OnInit } from '@angular/core';
import { RegionsService } from '../services/regions.service';
import { Observable } from 'rxjs';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions$: Observable<any[]> ;
  country$: Observable<any[]> ;
  constructor(private regionsService: RegionsService) { }

  ngOnInit() {
    // this.getAllRegions();
    this.regions$ = this.regionsService.getAllRegions$();
    
   
  }

  getAllRegions(){
    this.regionsService.getAllRegions$().subscribe(data=>{
      this.regions$ = data;
      console.log(data);
    })

  }

}
