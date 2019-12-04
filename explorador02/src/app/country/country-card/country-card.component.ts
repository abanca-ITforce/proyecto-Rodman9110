import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
  @Input() country: any;
  constructor(private countryServices: CountryService) { }

  ngOnInit() {
  }

  getCountry(countryId){
    
  }

}
