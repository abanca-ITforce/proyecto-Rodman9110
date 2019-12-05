import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  incomeLevel$: Observable<any[]>
  leadingType$: Observable<any[]>
  regions$: Observable<any[]>
  countriesFilters$: Observable<any[]>;
  constructor(private searchSercice: SearchService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.incomeLevel$ = this.searchSercice.getSearchIncomeLevelOptions$();
    this.leadingType$ = this.searchSercice.getSearchLeadingType$();
    this.regions$ = this.searchSercice.getSearchRegions$();
    
  }

  Search(event: any){

    // this.serciceSearch.
    // console.log("tt "+event)
    

  }


  getSearch(event: any){
    console.log(event);
    this.countriesFilters$ = this.searchSercice.getSearchLendingType_LevelOptions_Regions$(event.leadingType,event.incomeLevel,event.regions);
  }






}
