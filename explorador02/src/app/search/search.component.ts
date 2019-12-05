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
  constructor(private serciceSearch: SearchService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.incomeLevel$ = this.serciceSearch.getSearchIncomeLevelOptions$();
    this.leadingType$ = this.serciceSearch.getSearchLeadingType$();
    this.regions$ = this.serciceSearch.getSearchRegions$();
    
  }

  onSearch(event: any){

    // this.serciceSearch.
    

  }

}
