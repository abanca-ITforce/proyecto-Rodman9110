import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries$: Observable<any[]>;
  constructor(private countryService: CountryService) { }

  ngOnInit() {

    // this.getAllCountry();
    this.countries$ = this.countryService.getAllCountres$();
    
  }
  getAllCountry(){
    this.countryService.getAllCountres$().subscribe(data =>{
      this.countries$ = data;
      console.log(data);
    });   
  }

}
